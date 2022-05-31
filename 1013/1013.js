var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());

let maiorAB = (a + b + Math.abs(a - b)) / 2;

maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(maior + " eh o maior");
