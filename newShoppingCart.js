// shopping cart.
const prompt = require('prompt-sync')();

const shoppingCart = [];
let total = 0;
let totalItems = 0;
let totalQuantity = 0;
let totalAmount = 0;

// products.
const products = [
    {
        id: 1,
        name: "Cheese",
        cathegory: "Dairy",
        price: 100
    },
    {
        id: 2,
        name: "Soda",
        cathegory: "Drinks",
        price: 200
    },
    {
        id: 3,
        name: "Beer",
        cathegory: "Drinks",
        price: 300
    },
    {
        id: 4,
        name: "Rice",
        cathegory: "Food",
        price: 400
    },
    {
        id: 5,
        name: "Spaghetti",
        cathegory: "Food",
        price: 500
    },
    {
        id: 6,
        name: "Bleach",
        cathegory: "Hygiene",
        price: 600
    },
    {
        id: 7,
        name: "Shampoo",
        cathegory: "Hygiene",
        price: 700
    },
    {
        id: 8,
        name: "Soap",
        cathegory: "Hygiene",
        price: 800
    }
]

//Validate product from list.
const validateProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        if (product.id === id) {
            totalQuantity += product.quantity;
            totalAmount += product.amount;
            return true;
        }
    }  
}

// add item.
function addItem() {
    const id = parseInt(prompt('Enter product ID: '));
    const quantity = parseInt(prompt('Enter quantity: '));
    if (validateProduct(id)) {
        const product = products.find(product => product.id === id);
        const amount = product.price * quantity;
        total += amount;
        totalItems++;
        totalQuantity += quantity;
        totalAmount += amount;
        shoppingCart.push({id, quantity, amount});
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            if (product.id === id) {
                product.quantity -= quantity;
                product.amount = product.price * product.quantity;
            }
        }
        console.log(`Item ${product.name} added to cart.`);
    } else {
        console.log('Invalid product ID.');
    }
}

// remove item.
function removeItem() {
    const id = parseInt(prompt('Enter product ID to remove: '));
    const index = products.findIndex(item => item.id === id);
    if (index !== -1) {
        const item = products[index];
        total -= item.amount;
        totalItems--;
        totalQuantity -= item.quantity;
        totalAmount -= item.amount;
        shoppingCart.splice(index, 1);
        console.log(`Item ${item.name} removed from cart.`);
    } else {
        console.log('Invalid product ID.');
    }
}

// display cart.
function displayCart() {
    console.log('Shopping Cart:');
    for (let i = 0; i < shoppingCart.length; i++) {
        const item = products[products.findIndex(product => product.id === shoppingCart[i].id)];
        const quantity = shoppingCart[i].quantity;
        const amount = item.price * quantity;
        total += amount;
        console.log(`Item ${i + 1}: ${item.name} - Cathegory: ${item.cathegory} - Price: $${item.price} - Quantity: ${quantity} - Amount: $${amount.toFixed(2)}`);
    }
    console.log(`Total Items: ${totalItems}`);
    const totalQuantity = shoppingCart.reduce((total, item) => total + item.quantity, 0);
    const totalAmount = shoppingCart.reduce((total, item) => total + item.amount, 0);
    console.log(`Total Quantity: ${totalQuantity}`);
    console.log(`Total Amount: $${totalAmount.toFixed(2)}`);
    if (totalItems === 0) {
        return console.log('Cart is empty. No products have been added to the cart yet.');
    } 
}

// clear cart.
function clearCart() {
    shoppingCart.length = 0;
    total = 0;
    totalItems = 0;
    totalQuantity = 0;
    totalAmount = 0;
    console.log('Cart cleared.');
}
// display menu.
function displayMenu() {
    console.log('Shopping Cart Menu:');
    console.log('1. Add Item');
    console.log('2. Remove Item');
    console.log('3. Display Cart');
    console.log('4. Clear Cart');
    console.log('5. Exit');
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
            clearCart();
            break;
        case 5:
            console.log('Thank you for shopping!');
            return;
        default:
            console.log('Invalid choice.');
    }
}
