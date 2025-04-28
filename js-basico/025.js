/*
    && -> false && true -> false (retorna o valor MESMO)
    || -> 
    false -> valor falso literal
    FALSY VALUES
    0
    ' ' " " ` `
    null / undefined
    NaN
    -- qualquer coisa diferente desses avalia em true -- 
*/

    console.log('keroppi' && NaN && 'kuromi'); 

    // curto circuito

    function falaOi() {
        return 'oi';
    }

    // let vaiExecutar; -> undefined
    //const vaiExecutar = false; -> false
    const vaiExecutar = 'Cinnamoroll'; // true

    console.log(vaiExecutar && falaOi());

    /* */

    console.log(0 || false || null || 'hello kitty' || true); // o or precisa apenas 
    // de um elemento verdadeiro, retorna o primeiro valor verdadeiro que encontra

    const corUsuario = null;
    const corPadrao = corUsuario || 'rosa';

    console.log(corPadrao);

    const a = 9;
    const b = null;
    const c = false;
    const d = 'false';
    const e = NaN;

    console.log(a || b || c || d || e);