// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
/* 
const data = new Date(); // função construtora 
console.log(data.toString());
*/

/*
const tresHoras = 60 * 60 * 3 * 1000; // add 3 horas no GMT-3
const umDia = 60 * 60 * 24 * 1000; // add 1 dia
// const data = new Date(0); // 01/01/1970 timestamp unix 
const data = new Date(0 + tresHoras + umDia); 
*/

/* mês começa do 0
const data = new Date(2025, 0o3, 30, 18, 11, 59, 999); // a, m, d, h, m, s, ms
*/

/*
const data = new Date('2025-04-30 18:17:50');
console.log('dia', data.getDate());
console.log('mês', data.getMonth() + 1);
console.log('ano', data.getFullYear());
console.log('hora', data.getHours());
console.log('min', data.getMinutes());
console.log('seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('dia da semana', data.getDay());
console.log(data.toString());
console.log(Date.now());
*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);