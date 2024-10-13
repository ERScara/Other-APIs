const prompt = require("prompt-sync")();
var edad = parseInt(prompt("Introduce tu edad: "));
var puedeConducir = edad >= 18;

if (puedeConducir) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}
