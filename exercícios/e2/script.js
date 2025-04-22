const numero = Number(prompt('digite um número: ')); // prompt sempre retorna como string
// let numero 
// numero = Number(numero);
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p>seu número + 2 é ${numero + 2}.</p>`;
texto.innerHTML += `<p>raiz quadrada: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>arredondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>com duas casas decimais: ${numero.toFixed(2)}.</p>`;