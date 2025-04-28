/*
    operadores de comparação
    > maior que
    >= maior que ou igual a
    < menor que
    <= menor que ou igual a 
    == igualdade (valor)
    === igualdade estrita (valor e tipo)
    != diferente (valor)
    !== diferente estrito (valor e tipo)
*/
    const num1 = 10;
    const num2 = 10;
    const comp = num1 === num2;
    console.log(comp);

/* 
    operadores lógicos
    && and - todas expressões precisam ser verdadeiras para retornar verdadeiro
    || or - todas expressões precisam ser falsas para retornar falso
    ! not
*/
    const expressaoAnd = true && true && true && true;
    const expressaoOr = true || false;

    const usuario  = 'cinnamoroll';
    const senha = 'bolo de canela';

    const login = usuario === 'cinnamoroll' && senha === 'bolo de canela';
    console.log(login);

    console.log(!false); // inverte
    console.log(!!false); // retorna pro valor original