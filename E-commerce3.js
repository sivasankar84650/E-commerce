const cartCountElement = document.getElementById('cart-count');

let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.fa-shopping-cart');

addToCartButtons.forEach(button => {
  button.parentElement.addEventListener('click', event => {
    event.preventDefault(); 
    cartCount++;

    cartCountElement.textContent = cartCount;
  });
});


