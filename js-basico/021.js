/*
function saudacao(nome){ // recebe parâmetro
    console.log(`bom dia ${nome}!`);
}

saudacao(`hello kitty`); // chama a função passando o argumento/valor para o parâmetro

--- 

function saudacao(nome){ 
    return `bom dia ${nome}!`;
}

const variavel = saudacao(`hello kitty`); 
console.log(variavel); // variável recebe o valor que a função retorna
*/

/*
function soma(x, y){
    const resultado = x + y; // tudo que está no escopo da função está protegido
    return resultado;  // não é possível acessar nem alterar nada de dentro da função
}

console.log(soma(2, 2));

---

function soma(x, y){
    const resultado = x + y; 
    return resultado;  // quando a engine encontra return, a função será dada como encerrada
}

const resultado = soma(2, 2);
const resultado = soma(`hello`, ` kitty`);
console.log(resultado);

*/

/*   função anônima
const raiz = function (n) {
    return n ** 0.5;
}; // necessário ponto e vírgula no fechamento das chaves

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

/*   arrow function
const raiz = n => n ** 0.5; // utiliza da "seta"


console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
*/

