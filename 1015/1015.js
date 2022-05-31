var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let A = lines.shift();
let B = lines.shift();

let [xA, yA] = A.split(" ");
let [xB, yB] = B.split(" ");

xA = parseFloat(xA);
yA = parseFloat(yA);
xB = parseFloat(xB);
yB = parseFloat(yB);

let distancia = Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));

console.log(distancia.toFixed(4));
