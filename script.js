const cartItems = [];

document.querySelectorAll('.btn-add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productName = document.querySelectorAll('.product-title')[index].innerText;
        const productPrice = document.querySelectorAll('.product-price')[index].innerText.replace('$', '');
        const productImage = document.querySelectorAll('.product-image img')[index].src;
        cartItems.push({ productName, productPrice, productImage });
        updateCart();
    });
});

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.productImage}" alt="${item.productName}">
            <p><strong>${item.productName}</strong> - $${item.productPrice}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

function toggleCart() {
    const cart = document.getElementById('cart');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}