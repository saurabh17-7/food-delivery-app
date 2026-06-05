console.log("cart.js loaded");
let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addToCart(name, price, emoji) {
    cart.push({
         name, 
         price, 
         emoji
        
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${name} added to cart!`);
}
function updateCartCount() {

  cart = JSON.parse(
    localStorage.getItem("cart")
  ) || [];

  const countElements =
    document.querySelectorAll("#cartCount");

  countElements.forEach(el => {
    el.textContent = cart.length;
  });
}

function openCart() {

  const sidebar =
    document.getElementById("cartSidebar");

  const overlay =
    document.getElementById("cartOverlay");

  if (sidebar)
    sidebar.classList.add("open");

  if (overlay)
    overlay.classList.add("show");
}

function closeCart() {

  const sidebar =
    document.getElementById("cartSidebar");

  const overlay =
    document.getElementById("cartOverlay");

  if (sidebar)
    sidebar.classList.remove("open");

  if (overlay)
    overlay.classList.remove("show");
}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    updateCartCount();

    const openBtn =
      document.getElementById("openCart");

    if (openBtn) {
      openBtn.addEventListener(
        "click",
        openCart
      );
    }
  }
)
