var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift());

let anos = a / 365 - (a % 365) / 365;
let restoAnos = a % 365;

let meses = restoAnos / 30 - (restoAnos % 30) / 30;
let restoMeses = restoAnos % 30;

let dias = restoMeses;

console.log(anos.toFixed(0) + " ano(s)");
console.log(meses.toFixed(0) + " mes(es)");
console.log(dias.toFixed(0) + " dia(s)");
