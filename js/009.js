const nome = 'stefany';
const sobrenome = 'uwu';
const idade = 21;
const peso = 35;
const altura = 1.47;
let imc; 
imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2025 - idade;
// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg.`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);


