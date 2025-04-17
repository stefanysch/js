window.alert('oiiiiiii >.<'); // exibe mensagem

window.confirm('deseja apagar?'); // confirma alguma coisa com o usuário

window.prompt('digite o seu nome: '); // abrirá uma caixa com imput de texto

let confirma = confirm('qualquer coisa'); // armazenar um valor
console.log(confirma);  // verificar o valor

let num1 = prompt('digite um número:');
let num2 = prompt('digite outro número:');

num1 = Number(num1);
num2 = Number(num2);

alert(`o resultado da sua conta foi: +${num1 + num2}`);

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const temp = varA;
varA = varB;
varB = varC;
varC = vartemp;

console.log(varA, varB, varC);
