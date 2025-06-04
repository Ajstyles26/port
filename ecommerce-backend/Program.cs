var builder = WebApplication.CreateBuilder(args);

// Add services for minimal API and Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

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

// Additional endpoints can be added here (e.g. cart management)

app.Run();

record Product(int Id, string Name, decimal Price);
