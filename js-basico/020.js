const alunos = ['cinnamoroll', 'chococat', 'keroppi', 8, true, null]; 
alunos[1] = 'pochacco'; // editar um elemento 
console.log(alunos.length); // descobrir tamanho do array

/* 
alunos[6] = 'kuromi'; // adicionar um elemento
alunos.push('hello kitty'); // enfia um elemento no final do array
alunos[alunos.length] = 'my melody'; // adicionar elemento 
alunos.unshift('pompompurin'); // adiciona elemento no começo

alunos.pop(); // remove elemento do final
const removido = alunos.pop();
console.log(removido);
console.log(alunos);

alunos.shift(); // remove elemento do começo
const removido = alunos.shift();
console.log(removido);
console.log(alunos);

delete alunos[1]; // remove o elemento do índice, deixando um buraco no array (undefined)
console.log(alunos); 

console.log(alunos.slice(0, 2)); // fatia do primeiro ao terceiro elemento do array
console.log(alunos.slice(0, -2)); // fatia com número negativo

console.log(typeof alunos); // no js o array é um tipo de objeto indexado
console.log(alunos instanceof Array);
*/

console.log(alunos);
console.log(alunos[0]); // buscar elemento em um índice específico

/* Quando usamos const com tipos primitivos, 
esse valor nunca mais poderá ser alterado. 
Nesse caso, além de const não permitir reatribuição, 
o valor também é imutável (consequentemente, 
nunca podemos alterar essa constante).

Já quando usamos const com valores mutáveis 
(como arrays e objetos), a variável continua 
sendo constante, porém os valores dentro do objeto 
poderão ser alterados. Isso acontece porque 
quando alteramos um valor interno de um objeto, 
não ocorre a reatribuição da variável com 
sinal de atribuição = (a variável continua apontando 
para o mesmo local na memória), apenas a alteração 
de um valor interno do mesmo objeto.

Por este motivo, pode-se usar const com 
objetos mutáveis e ainda assim alterar seus 
valores internos. A única coisa que não 
vamos conseguir fazer é reatribuir o valor da variável.
*/