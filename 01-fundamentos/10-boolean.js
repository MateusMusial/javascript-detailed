let isAtivo = false;
console.log(isAtivo);
// -> false

isAtivo = true;
console.log(isAtivo);
// -> true

isAtivo = 1;
console.log( Boolean(isAtivo) ); // convartendo para boolean
// -> true
console.log(!!isAtivo); // duas negação converte boolean também
// -> true
console.log(!isAtivo);
// -> false

// Os verdadeiros....
console.log( Boolean(3) );
// -> true
console.log( Boolean(-1) );
// -> true
console.log( Boolean(' ') );
// -> true
console.log( Boolean('texto') );
// -> true
console.log( Boolean([]) );
// -> true
console.log( Boolean({}) );
// -> true
console.log( Boolean(Infinity) );
// -> true
console.log( Boolean(isAtivo = true) );
// -> true

// Os falsos....
console.log( Boolean(0) );
// -> false
console.log( Boolean('') );
// -> false
console.log( Boolean(null) );
// -> false
console.log( Boolean(NaN) );
// -> false
console.log( Boolean(undefined) );
// -> false
console.log( Boolean(isAtivo = false) );
// -> false

console.log( Boolean('' || null || 0 || ' ') );
// -> true

let nome = ''
console.log(nome || 'Desconhecido'); // seleciona o primeiro valor true e retorna
// -> Desconhecido