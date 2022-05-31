var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let triangulo = (a * c) / 2.0;

let circulo = 3.14159 * c * c;

let trapesio = ((a + b) * c) / 2.0;

let quadrado = b * b;

let retangulo = a * b;

console.log(
  "TRIANGULO: " +
    triangulo.toFixed(3) +
    "\n" +
    "CIRCULO: " +
    circulo.toFixed(3) +
    "\n" +
    "TRAPEZIO: " +
    trapesio.toFixed(3) +
    "\n" +
    "QUADRADO: " +
    quadrado.toFixed(3) +
    "\n" +
    "RETANGULO: " +
    retangulo.toFixed(3)
);
