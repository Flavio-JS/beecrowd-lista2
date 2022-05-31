var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let a = parseInt(lines.shift());

let cem = a / 100 - (a % 100) / 100;
let restoCem = a % 100;

let cinquenta = restoCem / 50 - (restoCem % 50) / 50;
let restoCinquenta = restoCem % 50;

let vinte = restoCinquenta / 20 - (restoCinquenta % 20) / 20;
let restoVinte = restoCinquenta % 20;

let dez = restoVinte / 10 - (restoVinte % 10) / 10;
let restoDez = restoVinte % 10;

let cinco = restoDez / 5 - (restoDez % 5) / 5;
let restoCinco = restoDez % 5;

let dois = restoCinco / 2 - (restoCinco % 2) / 2;
let restoDois = restoCinco % 2;

let um = restoDois;

console.log(a);
console.log(cem.toFixed(0) + " nota(s) de R$ 100,00");
console.log(cinquenta.toFixed(0) + " nota(s) de R$ 50,00");
console.log(vinte.toFixed(0) + " nota(s) de R$ 20,00");
console.log(dez.toFixed(0) + " nota(s) de R$ 10,00");
console.log(cinco.toFixed(0) + " nota(s) de R$ 5,00");
console.log(dois.toFixed(0) + " nota(s) de R$ 2,00");
console.log(um.toFixed(0) + " nota(s) de R$ 1,00");
