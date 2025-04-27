function meuEscopo() {
    const form = document.querySelector('.form'); // form - nome da tag, .form - pela classe, #form pelo id
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*
    form.onsubmit = function(evento) {
        evento.preventDefault(); // previne o padrão de enviar o formulário
        alert(1);
        console.log('enviado.');
    };
    */

    /*
    let contador = 1;
    function recebeEventoForm(evento) {
        evento.preventDefault();
        console.log(`form não foi enviado - ${contador}`);
        contador++;
    }

     form.addEventListener('submit', recebeEventoForm);
    */ 

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome'); // irá buscar por coisas apenas dentro do form
        const sobrenome = form.querySelector('.sobrenome'); 
        const peso = form.querySelector('.peso'); 
        const altura = form.querySelector('.altura'); 

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} `
         + `${peso.value} ${altura.value}</p>`;
         
        //console.log(nome.value, sobrenome, peso, altura); // sempre que precisar do input utilizar .value
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();