/*
const pessoa = { // objetos com chaves, arrays com colchetes
    nome: `hello`,
    sobrenome: `kitty`,
    idade: 5
};
console.log(pessoa.nome);
*/

/*     factory - fábrica de objetos
function criaPessoa(nome, sobrenome, idade) {
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade        // return {nome, sobrenome, idade: idade}; -> nesse caso poderia ser assim
    // };
}
    const pessoa1 = criaPessoa(`hello`, `kitty`, 5);
    console.log(pessoa1.nome); 
*/

    //objeto através de variável
const pessoa1 = {
    nome: `Hello`,
    sobrenome: `Kitty`, 
    idade: 5,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
        console.log(`A minha idade atual é ${this.idade}`);
    },
    
    incrementaIdade() {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
