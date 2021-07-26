const readlineSync = require('readline-sync');

function add(p1, p2) {
    return p1 + p2;   // The function returns the product of p1 and p2
}
function mul(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

function div(p1, p2) {
    return p1 / p2;   // The function returns the product of p1 and p2
}

function sub(p1, p2) {
    return p1 - p2;   // The function returns the product of p1 and p2
}

var num1 = Number(readlineSync.question("Please enter your first number:"));
var num2 = Number(readlineSync.question("Please enter your second number:"));
var operation = readlineSync.question("Please enter the operation to perform: add, sub, mul, or div.");

switch(operation) {
    case 'add':
        console.log("hello world!!!");
        console.log(add(num1,num2));
    break;
    case 'sub':
        console.log(sub(num1,num2));
    break;
    case 'mul':
        console.log(mul(num1,num2));
    break;
    case 'div':
        console.log(div(num1,num2));
    break;

  }

console.log("hello world!!!");

