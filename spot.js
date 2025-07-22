// Carrinho básico
let cartCount = 0;

document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert("Produto adicionado ao carrinho!");
  });
});
