// (condição) ? 'valor para verdadeiro' : 'valor para falso';
const pontuacaoUsuario = 999;

/*
if (pontuacaoUsuario >= 1000) {
    console.log('usuario vip');
} else {
    console.log('usuario normal');
}
*/

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'usuario vip' : 'usuario normal';

const corUsuario = null;
const corPadrao = corUsuario || 'preta';

console.log(nivelUsuario, corPadrao);