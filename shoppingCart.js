// shopping cart.
const prompt = require('prompt-sync')();

const shoppingCart = [];
let total = 0;
let totalItems = 0;
let totalQuantity = 0;
let totalAmount = 0;

function addItem() {
    const itemName = prompt('Enter item name: '); // prompt is used to get user input.
    const itemPrice = parseFloat(prompt('Enter item price: '));  // parseFloat is used to convert a string to a floating-point number.
    const itemQuantity = parseInt(prompt('Enter item quantity: '));  // parseInt is used to convert a string to an integer.
    const itemAmount = itemPrice * itemQuantity;
    const item = { name: itemName, price: itemPrice, quantity: itemQuantity, amount: itemAmount };
    shoppingCart.push(item);
    total += itemAmount;
    totalItems++;
    totalQuantity += itemQuantity;
    totalAmount += itemAmount;
}

function removeItem() {
    const itemIndex = parseInt(prompt('Enter item number to remove: ')) - 1;
    if (itemIndex >= 0 && itemIndex < shoppingCart.length) {
        const item = shoppingCart[itemIndex];
        total -= item.amount;
        totalItems--;
        totalQuantity -= item.quantity;
        totalAmount -= item.amount;
        shoppingCart.splice(itemIndex, 1);
        console.log(`Item ${item.name} removed from cart.`);
    } else {
        console.log('Invalid item number.');
    }
}

function displayCart() {
    console.log('Shopping Cart:');
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = shoppingCart[i];
        console.log(`Item ${i + 1}: ${item.name} - Price: $${item.price} - Quantity: ${item.quantity} - Amount: ${item.amount}`);
    }
    console.log(`Total Items: ${totalItems}`);
    console.log(`Total Quantity: ${totalQuantity}`);
    console.log(`Total Amount: $${totalAmount}`);
    if (totalItems === 0) {
        return console.log('Cart is empty. No products have been added to the cart yet.');
    }
}

function displayMenu() {
    console.log('Shopping Cart Menu:');
    console.log('1. Add Item');
    console.log('2. Remove Item');
    console.log('3. Display Cart');
    console.log('4. Exit');
}

while (true) {
    displayMenu();
    const choice = parseInt(prompt('Enter your choice: '));
    switch (choice) {
        case 1:
            addItem();
            break;
        case 2:
            removeItem();
            break;
        case 3:
            displayCart();
            break;
        case 4:
            console.log('Thank you for shopping!');
            return;
        default:
            console.log('Invalid choice.');
    }
}
