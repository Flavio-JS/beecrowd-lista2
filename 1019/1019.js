var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift());

let horas = a / 3600 - (a % 3600) / 3600;
let restoHroas = a % 3600;

let minutos = restoHroas / 60 - (restoHroas % 60) / 60;
let restoMinutos = restoHroas % 60;

let segundos = restoMinutos;

console.log(
  horas.toFixed(0) + ":" + minutos.toFixed(0) + ":" + segundos.toFixed(0)
);
