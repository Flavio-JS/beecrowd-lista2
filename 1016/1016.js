var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let distancia = parseFloat(lines.shift());

let minutos = distancia * 2;

console.log(minutos + " minutos");
