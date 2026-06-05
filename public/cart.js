let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, emoji) {

    cart.push({
        name,
        price,
        emoji
    });

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
    renderCart();
    openCart();
}

function updateCartCount() {

    cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    const count =
        document.getElementById("cartCount");

    if (count) {
        count.textContent = cart.length;
    }
}

function renderCart() {

    const container =
        document.getElementById(
            "cartItemsContainer"
        );

    const footer =
        document.getElementById(
            "cartFooter"
        );

    const totalEl =
        document.getElementById(
            "cartTotal"
        );

    if (!container) return;

    cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-emoji">🛒</span>
                <p>Your cart is empty</p>
                <p style="font-size:13px; margin-top:6px;">
                    Add items from the menu
                </p>
            </div>
        `;

        if (footer)
            footer.style.display = "none";

        return;
    }

    let total = 0;

    container.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        container.innerHTML += `
            <div class="cart-item">

                <div class="cart-item-info">

                    <div>
                        <strong>
                            ${item.emoji}
                            ${item.name}
                        </strong>

                        <div>
                            ₹${item.price}
                        </div>
                    </div>

                </div>

                <button
                    onclick="removeItem(${index})">
                    ❌
                </button>

            </div>
        `;
    });

    if (totalEl)
        totalEl.textContent = `₹${total}`;

    if (footer)
        footer.style.display = "block";
}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    updateCartCount();
    renderCart();
}

function openCart() {

    const sidebar =
        document.getElementById(
            "cartSidebar"
        );

    const overlay =
        document.getElementById(
            "cartOverlay"
        );

    if (sidebar)
        sidebar.classList.add("open");

    if (overlay)
        overlay.classList.add("show");
}

function closeCart() {

    const sidebar =
        document.getElementById(
            "cartSidebar"
        );

    const overlay =
        document.getElementById(
            "cartOverlay"
        );

    if (sidebar)
        sidebar.classList.remove("open");

    if (overlay)
        overlay.classList.remove("show");
}

async function checkout() {

    cart = JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    const customerName =
        prompt("Enter Your Name");

    if (!customerName) return;

    const totalPrice =
        cart.reduce(
            (sum, item) =>
                sum + item.price,
            0
        );

    const orderData = {

        customerName,

        items: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: 1
        })),

        totalPrice
    };

    const response =
        await fetch("/api/orders", {

            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body:
                JSON.stringify(orderData)
        });

    if (response.ok) {

        alert(
            "🎉 Order Placed Successfully"
        );

        localStorage.removeItem(
            "cart"
        );

        cart = [];

        updateCartCount();
        renderCart();
        closeCart();
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCartCount();
        renderCart();

        const openBtn =
            document.getElementById(
                "openCart"
            );

        if (openBtn) {

            openBtn.addEventListener(
                "click",
                (e) => {

                    e.preventDefault();

                    renderCart();
                    openCart();
                }
            );
        }
    }
);