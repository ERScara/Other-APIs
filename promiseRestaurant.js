const platos = [
    "milanesa con papas fritas",
    "arroz con leche",
    "milanesa con puré",
    "pizza",
    "helado",
    "ensalada mixta"
]

const mozo = {
    platoDelDía: "milanesa con papas fritas",
    pedirPlato: function (plato) {
        console.log("se pide el plato de " + plato + " al mozo");
        return new Promise((resolve, reject) => {
            if (plato === this.platoDelDía || platos.includes(plato)) {
                console.log("La cocinera esta preparando el plato");
                setTimeout(() => {
                    if (platos.includes(plato)) {
                        resolve(plato);
                    } else {
                        console.log("pidiendo plato a la cocinera");
                        reject("No hay plato disponible");
                    }
                }, 3000);
            } else {
                setTimeout(() => {
                    console.log("Lo siento, no tenemos " + plato);
                }, 2000);
            }
        }
        )
    }
}



console.log("El plato del dia es: " + mozo.platoDelDía);

const promesaComida = mozo.pedirPlato("ensalada mixta");
const comerComida = function(plato) {
    console.log("Comiendo " + plato + "...");
    console.log("Ahora, el postre...");
}
comerComida("ensalada mixta", promesaComida);

promesaComida.then(() => {
    if (promesaComida !== mozo.platoDelDía) {
        console.log("Quiero " + "helado")
        return console.log("Comiendo helado...");
    } else {
        console.log("Mejor no pido postre");
    }
}).then(() => {
    const propina = 10;
    console.log(`Gracias, todo muy rico. Aqui le dejo algo de propina por su servicio: $${propina}.`);
}).catch(error => console.log(error)).finally(() => console.log("Le pido la cuenta, pago y luego me retiro."));










