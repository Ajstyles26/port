using EcommerceBackend.Models;
using EcommerceBackend.DTOs;
using EcommerceBackend.Repositories;
using Microsoft.AspNetCore.Identity;
using System.IO;

var builder = WebApplication.CreateBuilder(args);

// Add services for minimal API and Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<EcommerceBackend.Repositories.IUserRepository, EcommerceBackend.Repositories.UserRepository>();
builder.Services.AddSingleton<Microsoft.AspNetCore.Identity.PasswordHasher<EcommerceBackend.Models.User>>();

// Temporary in-memory product list. Replace with database logic as needed.
var products = new List<Product>
{
    new Product(1, "Item A", 25M),
    new Product(2, "Item B", 30M),
    new Product(3, "Item C", 45M)
};

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// GET /api/products - list all products
app.MapGet("/api/products", () => products);

var usersRepo = app.Services.GetRequiredService<EcommerceBackend.Repositories.IUserRepository>();
var hasher = app.Services.GetRequiredService<Microsoft.AspNetCore.Identity.PasswordHasher<EcommerceBackend.Models.User>>();

app.MapPost("/api/signup", (EcommerceBackend.DTOs.UserDto dto) =>
{
    if (usersRepo.GetByEmail(dto.Email) != null)
        return Results.BadRequest(new { message = "Email already exists" });

    var user = new EcommerceBackend.Models.User { Email = dto.Email };
    user.PasswordHash = hasher.HashPassword(user, dto.Password);
    usersRepo.Add(user);
    return Results.Ok(new { message = "User created" });
});

app.MapPost("/api/login", (EcommerceBackend.DTOs.UserDto dto) =>
{
    var user = usersRepo.GetByEmail(dto.Email);
    if (user == null) return Results.BadRequest(new { message = "Invalid login" });
    var result = hasher.VerifyHashedPassword(user, user.PasswordHash, dto.Password);
    if (result == Microsoft.AspNetCore.Identity.PasswordVerificationResult.Success)
        return Results.Ok(new { success = true, token = "demo-token" });
    return Results.BadRequest(new { message = "Invalid login" });
});

app.MapPost("/api/checkout", async (HttpContext ctx) =>
{
    using var reader = new StreamReader(ctx.Request.Body);
    var body = await reader.ReadToEndAsync();
    Console.WriteLine($"Checkout request: {body}");
    // Here you would create a Stripe session
    return Results.Ok(new { success = true });
});

app.Run();

record Product(int Id, string Name, decimal Price);
