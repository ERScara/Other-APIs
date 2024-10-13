function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2
}

let num1 = 10;
let num2 = 20;
let doble = num => num * 2;
console.log(doble(num1) * doble(num2));


var x = average(10, 20);
console.log(x);
function sayHello(name, callback) {
    console.log("Hello " + name + "!");
    callback();
}

function goodbye() {
    console.log("Goodbye!");
}

sayHello("Esteban", goodbye);


