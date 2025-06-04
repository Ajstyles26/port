# Simple E-commerce Example

This project started as a static client-side demo. The `ecommerce` directory now also provides signup and login pages that talk to an ASP.NET Core backend. Checkout posts cart data to a demo Stripe endpoint served by the backend.

The repository also includes a basic ASP.NET Core backend in `ecommerce-backend`.
This backend exposes a simple `/api/products` endpoint returning the sample
product list. You can extend it and connect a database as needed.

## Files
- `index.html` – product listing
- `cart.html` – displays items added to the cart
- `login.html` / `signup.html` – basic authentication
- `css/style.css` – basic styles
- `js/main.js` – handles cart logic
- `js/auth.js` – handles login and signup requests

## Running
Open `ecommerce/index.html` in any modern browser to view the store. Cart contents persist in the browser using `localStorage`.

## MudBlazor Ecommerce (Login First)
A simple Blazor Server app using MudBlazor components is available in the `mudblazor-ecommerce` folder. The application starts on the login page (`/`) and navigates to the product listing after successful login.
