# MudBlazor Ecommerce

This is a minimal Blazor Server application using MudBlazor components. The app starts on a login page and requires authentication before navigating to the product listing page.

The project now references the `ecommerce-backend` project so the DTOs and repository can be used directly inside the Blazor app. You can build and run it locally with the .NET 8 SDK installed:

```bash
dotnet restore
dotnet run
```
