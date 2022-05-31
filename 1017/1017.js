var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = lines.shift();
let b = lines.shift();

let distancia = a * b;

let litros = distancia / 12;

console.log(litros.toFixed(3));
