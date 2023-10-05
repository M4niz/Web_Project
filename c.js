// cart.js
const cartItems = []; // Initialize an array to store cart items

function addToCart(productName, productPrice) {
    // Create a new cart item object
    const newItem = {
        name: productName,
        price: productPrice,
        quantity: 1
    };

    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // If the item is already in the cart, increment quantity
        existingItem.quantity++;
    } else {
        // If the item is not in the cart, add it
        cartItems.push(newItem);
    }

    // Update the cart display
    updateCartDisplay();
}

function removeFromCart(productName) {
    // Find the index of the item to remove
    const itemIndex = cartItems.findIndex(item => item.name === productName);

    if (itemIndex !== -1) {
        // Remove the item from the cart
        cartItems.splice(itemIndex, 1);
    }

    // Update the cart display
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Clear the cart display
    cartItemsElement.innerHTML = '';

    let total = 0;

    // Loop through cart items and display them
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <h3 style="color:black">${item.name}</h3>
            <p style="color:black">Price: $${item.price.toFixed(2)}</p>
            <p style="color:black">Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;

        // Add the item to the cart display
        cartItemsElement.appendChild(itemElement);

        // Calculate the item's total price and add it to the total
        total += item.price * item.quantity;
    });

    // Update the cart's total
    cartTotalElement.textContent = total.toFixed(2);
}
