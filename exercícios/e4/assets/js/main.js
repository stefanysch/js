const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    /*
    console.log('Evento previnido');
    setResultado(' olá >.< ');
    */
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    console.log(peso, altura);

     if (!peso) {
        setResultado('peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const faixaIMC = getFaixaIMC(imc);

    const msg = `seu IMC é ${imc} (${faixaIMC}).`;
    
    setResultado(msg, true);
}); 

function getFaixaIMC(imc) {
    const faixa = ['abaixo do peso', 'peso normal', 'sobrepeso', 
        'obesidade I', 'obesidade II', 'obesidade III'];
    
    if (imc >= 39.9) return faixa[5];
    if (imc >= 34.9) return faixa[4];
    if (imc >= 29.9) return faixa[3];
    if (imc >= 24.9) return faixa[2];
    if (imc >= 18.5) return faixa[1];
    return faixa[0];
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
//  função criar parágrafo
function criaParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

/*   const p = document.createElement('p'); // criando um parágrafo
     p.classList.add('paragrafo-resultado'); // colocando classe no parágrafo
     p.innerHTML = ' uwu > . < * ';
     resultado.appendChild(); // insere um resultado no elemento
*/
    const p = criaParagrafo();
    if(isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('incorreto');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}