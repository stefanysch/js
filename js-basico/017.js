// strings são indexadas, índices para caracteres
// let umaString = "hello \"world\""; // barra serve como escape

let umaString = "hello world"; 

console.log(umaString);
console.log(umaString[4]); // exibir elemento do índice 4
console.log(umaString.charAt(7)); // exibir elemento do índice 7

// formas de concatenação
console.log(umaString.concat(' :3'));
console.log(umaString + ' >.< . ');
console.log(`${umaString} :3 >.<  . `);

console.log(umaString.indexOf('hello'));// buscar índice que começa uma palavra
console.log(umaString.indexOf('o', 6)); // buscar letra "o" depois do índice 6
console.log(umaString.lastIndexOf('o', 2));// buscar letra "o" com índice de trás pra frente
console.log(umaString.search(/l/));
console.log(umaString.replace('world', 'you'));
console.log(umaString.replace(/l/, '*'));
console.log(umaString.replace(/l/g, '*'));
console.log(umaString.length);
console.log(umaString.slice(0, 5));
console.log(umaString.slice(-6));
console.log(umaString.split(' '));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());