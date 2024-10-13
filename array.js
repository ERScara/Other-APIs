const miArray = [];
miArray.push(1);
miArray.push(2);
miArray.push(3);
miArray.push(4);
miArray.push(5);
miArray.pop();
miArray.unshift(0);
//miArray.splice(0, 1, "hola", "todo", "bien");
const miArrayDoble = miArray.map(x => x * 69);

/*const miSubArray = miArray.slice(0, 2);

console.log(miSubArray);*/
console.log(miArrayDoble);
console.log(miArray);