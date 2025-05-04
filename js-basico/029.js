
// if (diaSemana === 0) {
//     diaSemanaTxt = 'domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTxt = 'segunda';
// } else if (diaSemana === 2) {
//     diaSemanaTxt = 'terça';
// } else if (diaSemana === 3) {
//     diaSemanaTxt = 'quarta';
// } else if (diaSemana === 4) {
//     diaSemanaTxt = 'quinta';
// } else if (diaSemana === 5) {
//     diaSemanaTxt = 'sexta';
// } else if (diaSemana === 6) {
//     diaSemanaTxt = 'sábado';
// } else {
//     diaSemanaTxt = 'fora do range';
// }
// console.log(diaSemana, diaSemanaTxt);


function qualDiaSemanaTxt(diaSemana) {
    switch (diaSemana) {
        case 0:
            diaSemanaTxt = 'domingo';
            return diaSemanaTxt; // break
        case 1:
            diaSemanaTxt = 'segunda';
            return diaSemanaTxt;
        case 2:
            diaSemanaTxt = 'terça';
            return diaSemanaTxt;
        case 3:
            diaSemanaTxt = 'quarta';
            return diaSemanaTxt;
        case 4:
            diaSemanaTxt = 'quinta';
            return diaSemanaTxt;
        case 5:
            diaSemanaTxt = 'sexta';
            return diaSemanaTxt;
        case 6:
            diaSemanaTxt = 'sábado';
            return diaSemanaTxt;
        default:
            diaSemanaTxt = 'não encontrado *-*';
    }
}

const data = new Date('1987-04-20 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTxt = qualDiaSemanaTxt(diaSemana);

console.log(diaSemana, diaSemanaTxt);