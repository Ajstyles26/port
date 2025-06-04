# Simple E-commerce Example

This repository hosts a sample e-commerce solution built with Blazor Server and MudBlazor components. The previous static `ecommerce` site has been removed. A minimal ASP.NET Core backend is still available in `ecommerce-backend` exposing a `/api/products` endpoint.

## MudBlazor Ecommerce

Run the Blazor app from the `mudblazor-ecommerce` folder:

```bash
cd mudblazor-ecommerce
dotnet run
```

The application starts on the login page and navigates to the product list after you sign in.

## Backend API

To start the optional backend API:

```bash
cd ecommerce-backend
dotnet run
```

The API listens on `https://localhost:5001` by default.
