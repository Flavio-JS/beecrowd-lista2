var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift());
let b = parseFloat(lines.shift());

let calculo = a / b;

console.log(calculo.toFixed(3) + " km/l");
