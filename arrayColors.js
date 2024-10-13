/* Array of objects that return the object that have in common */

const colors = ["red", "green", "blue", "yellow"];
const otherColors = ["violet", "indigo", "blue", "green", "yellow"];

console.log(colors.filter(color => otherColors.includes(color)));