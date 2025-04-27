/* tipos primitivos (imutáveis) - string, number, boolean, 
undefined, null, bigint, symbol - valores copiados
*/

let nome = `hello kitty`;
nome[0] = `s`;
console.log(nome[0], nome); // não irá fazer nada pois a string é imutável, valor imutável

let a = `A`;
let b = a; // faz uma cópia
console.log(a, b); // a não depende de b, b não depende de a

a = `outra coisa`;
console.log(a, b); // alterar o valor de a não altera o valor de b

/* por referência (mutáveis) - arrays, object, 
function - valores passados por referência
let a = [1, 2, 3];
let b = a; // b referencia o mesmo valor de a na memória do computador
let c = b; // teremos mais uma variável apontanto para o mesmo valor na memória
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push(`kuromi`);
console.log(c);

//    exemplo de como copiar o valor de a para b em referência
let a = [1, 2, 3];
let b = [...a];  
let c = b; // c irá seguir o valor de b
*/ 

const objetoA = {
    nome: `hello`,
    sobrenome: `kitty`
    };
    // const varB = objetoA; // basicamente b aponta para o mesmo local que a na memória
    const varB = {...a}; // espalha o valor de a dentro de b, o valor de b agora é independente

    a.nome = `keroppi`;
    console.log(objetoA);
    console.log(varB);
