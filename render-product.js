// render-products.js
const productsGrid = document.querySelector(".products-grid");
const modal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalSpecs = document.getElementById("modalSpecs");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.querySelector(".close");
const addCartBtn = document.querySelector(".add-cart-btn");
const miniCart = document.getElementById("miniCart");

let cart = [];

// Set this variable per page: 'all', 'laptops', 'iphones', 'shoes', 'jeans'
const category = window.category || 'all';

function renderProducts() {
  productsGrid.innerHTML = '';
  let filtered = (category === 'all') ? products : products.filter(p => p.category === category);
  filtered.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.dataset.name = p.name;
    div.dataset.price = p.price;
    div.dataset.specs = p.specs;
    div.dataset.image = p.image;
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <p><strong>${p.name}</strong><br>${p.price}</p>
    `;
    div.addEventListener('click', () => showModal(p));
    productsGrid.appendChild(div);
  });
}

function showModal(product) {
  modal.style.display = 'flex';
  modalImage.src = product.image;
  modalName.textContent = product.name;
  modalSpecs.textContent = product.specs;
  modalPrice.textContent = product.price;

  addCartBtn.onclick = () => {
    cart.push({name: product.name, price: product.price});
    updateCart();
    modal.style.display = 'none';
  };
}

function updateCart() {
  miniCart.textContent = `Cart: ${cart.length} item(s)`;
  miniCart.onclick = () => {
    let msg = "Hello Mr Dee, I would like to order:\n";
    cart.forEach((item, i) => { msg += `${i+1}x ${item.name} - ${item.price}\n`; });
    window.open(`https://wa.me/27628952301?text=${encodeURIComponent(msg)}`);
  };
}

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; }

renderProducts();
