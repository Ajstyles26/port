const products = [
  { id: 1, name: 'Item A', price: 25 },
  { id: 2, name: 'Item B', price: 30 },
  { id: 3, name: 'Item C', price: 45 }
];

function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  document.getElementById('cart-count').innerText = cart.reduce((s, p) => s + p.qty, 0);
  return cart;
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

function renderProducts() {
  const list = document.getElementById('product-list');
  if (!list) return;
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `<strong>${p.name}</strong><br>$${p.price}<br>`;
    const btn = document.createElement('button');
    btn.innerText = 'Add to Cart';
    btn.onclick = () => addToCart(p.id);
    div.appendChild(btn);
    list.appendChild(div);
  });
}

function addToCart(id) {
  const cart = loadCart();
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty += 1;
  } else {
    const product = products.find(p => p.id === id);
    cart.push({ id: product.id, name: product.name, price: product.price, qty: 1 });
  }
  saveCart(cart);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  if (!container) return;
  const cart = loadCart();
  container.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerText = `${item.name} x${item.qty} - $${item.price * item.qty}`;
    container.appendChild(div);
    total += item.price * item.qty;
  });
  document.getElementById('cart-total').innerText = total.toFixed(2);
}

function checkout() {
  alert('Checkout is not implemented.');
  localStorage.removeItem('cart');
  renderCart();
  loadCart();
}

// Setup on load
window.addEventListener('DOMContentLoaded', () => {
  loadCart();
  renderProducts();
  renderCart();
  const btn = document.getElementById('checkout-btn');
  if (btn) btn.addEventListener('click', checkout);
});
