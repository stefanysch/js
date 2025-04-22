// IEEE 754-2008 
let num1 = 0.7;
let num2 = 0.1;

/*
num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

num1 = num1.toFixed(2);
num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2));

num1 = ((num1 * 100)) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100)) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100)) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(num1)); // false 
*/

console.log(num1.toString() + num2); // concatenar números
num1 = num1.toString(); // alterar o valor de uma variável 
console.log(typeof num1); // verificar o valor 
console.log(num1.toString(2)); // verificar representação binária de uma variável
console.log(num1.toFixed(2)); // formatar casas decimais depois da vírgula
console.log(Number.isInteger(num1)); // verifica se o número é inteiro ou não

let temp = num1 * 'ola';
console.log(Number.isNaN(temp));
