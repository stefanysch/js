const hora = 10;

if(hora >= 0 && hora <= 11) {
    console.log('bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('boa noite');
} else {
    console.log('tenha um bom dia');
}

const numero = 10;

// se (numero >= 0 && numero <= 5) ocorrer, faça isso {codigo}
// se não, faça isso {o código}

if (numero <= 10) {
    console.log('o número é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('o número está entre 0 e 5.');
} else if (numero >= 6 && numero <=8) {
    console.log('o número entá entre 6 e 8.');
} else if (numero >=9 && numero <= 11) {
    console.log('o número está entre 9 e 11.');
} else {
    console.log('o número não está entre 0 e 11.')
}
