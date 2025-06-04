# Simple E-commerce Example

This project contains a minimal example of a client-side e-commerce website. It is located in the `ecommerce` directory and includes a product list, cart functionality stored in `localStorage`, and a placeholder checkout action. The site is purely static and does not include payment processing or server-side code.

The repository also includes a basic ASP.NET Core backend in `ecommerce-backend`.
This backend exposes a simple `/api/products` endpoint returning the sample
product list. You can extend it and connect a database as needed.

## Files
- `index.html` – product listing
- `cart.html` – displays items added to the cart
- `css/style.css` – basic styles
- `js/main.js` – handles cart logic

## Running
Open `ecommerce/index.html` in any modern browser to view the store. Cart contents persist in the browser using `localStorage`.
