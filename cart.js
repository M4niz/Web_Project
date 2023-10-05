let cartItems = [];
let cartCount = 0;

function updateCartCount() {
  const cartIcon = document.getElementById('cart-icon');
  const cartCountSpan = document.querySelector('.cart-items');
  cartCountSpan.textContent = cartCount;
}

function toggleCart() {
  const cartContainer = document.querySelector('.cart-container');
  if (cartContainer) {
      cartContainer.classList.toggle('cart-visible');
  }
}

function displayCartItems() {
  const cartContent = document.querySelector('.cart-content');
  cartContent.innerHTML = '';
  cartItems.forEach((item) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price}$</span>
    `;
    cartContent.appendChild(cartItem);
  });
}
document.addEventListener('DOMContentLoaded', function () {
  function toggleCart() {
      const cartContainer = document.querySelector('.cart-container');
      if (cartContainer) {
          cartContainer.classList.toggle('cart-visible');
      }
  }

  // Attach the toggleCart function to the button's click event
  const cartButton = document.querySelector('.cart-button');
  if (cartButton) {
      cartButton.addEventListener('click', toggleCart);
  }

  // Example code to add items to the cart
  const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
  if (addToCartButtons) {
      addToCartButtons.forEach(function (button) {
          button.addEventListener('click', function () {
              // You can add your cart logic here
              // For example, increment the cart item count and update the UI
              const cartItems = document.querySelector('.cart-items');
              if (cartItems) {
                  const currentItemCount = parseInt(cartItems.textContent);
                  cartItems.textContent = currentItemCount + 1;
              }
          });
      });
  }
});
