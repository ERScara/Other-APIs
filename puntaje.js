const prompt = require('prompt-sync')();

// Validate that the value is between 0 and 10
let grade = (num1) => {
    num1 = parseInt(num1);
    if (num1 <= 10 && num1 >= 9) {
        return 'Sobresaliente';
    } else if (num1 <= 9 && num1 >= 7) {
        return 'Notable';
    } else if (num1 <= 7 && num1 >= 6) {
        return 'Bien';
    } else if (num1 <= 6 && num1 >= 5) {
        return 'Suficiente';
    } else if (num1 <= 5 && num1 >= 3) {
        return 'Insuficiente';
    } else if (num1 <= 3 && num1 >= 0) {
        return 'Muy Deficiente';
    } else if (num1 >= 10) {
        return 'Valor incorrecto';
    } else if (num1 <= -1) {
        return 'Valor incorrecto';
    }
}; // Validates the grade and returns the corresponding grade

// Call the function
console.log(grade(prompt('Bienvenido al registro de notas. Para calificar, ingrese la nota del estudiante: ')));