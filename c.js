const cartItems = []; 

function addToCart(productName, productPrice) {
    const newItem = {
        name: productName,
        price: productPrice,
        quantity: 1
    };
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push(newItem);
    }
 
    updateCartDisplay();
}

function removeFromCart(productName) {
    const itemIndex = cartItems.findIndex(item => item.name === productName);

    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <h3 style="color:black">${item.name}</h3>
            <p style="color:black">Price: $${item.price.toFixed(2)}</p>
            <p style="color:black">Quantity: ${item.quantity}</p>
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;

        
        cartItemsElement.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartTotalElement.textContent = total.toFixed(2);
}
