// script.js

// Shopping Cart Functionality

let cart = [];

// Function to add an item to the cart
function addToCart(item, size, quantity) {
    const cartItem = { item, size, quantity };
    cart.push(cartItem);
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(item) {
    cart = cart.filter(cartItem => cartItem.item !== item);
    updateCartDisplay();
}

// Function to update the display of the cart
function updateCartDisplay() {
    // Logic to update the cart display on the webpage
    console.log('Cart updated:', cart);
}

// Function to calculate discounts
function calculateDiscount() {
    let totalItems = 0;
    let totalPrice = 0;
    cart.forEach(cartItem => {
        totalItems += cartItem.quantity;
        totalPrice += getItemPrice(cartItem.item) * cartItem.quantity;
    });
    
    // Leve 3 Pague 2 discount logic
    const discount = Math.floor(totalItems / 3) * getItemPrice(cartItem.item);
    return totalPrice - discount;
}

// Mock function to get item price
function getItemPrice(item) {
    // This would normally fetch the price of the item from some data source
    return 100; // Placeholder value
}

// Function to handle PIX Checkout
function checkoutWithPIX() {
    const totalCost = calculateDiscount();
    // Logic for PIX payment integration would go here
    console.log('Checkout with PIX, total cost:', totalCost);
}

// Example usage:
// addToCart('T-Shirt', 'M', 1);
// removeFromCart('T-Shirt');
// checkoutWithPIX();
