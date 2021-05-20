const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna o caractere da posição 4
// -> "r"

console.log(escola.charAt(5)); // retorna o caractere da posição 5, no caso vazio
// -> ""

console.log(escola.charCodeAt(3)); // retorna o número da tabela unicode
// -> 51

console.log(escola.indexOf('d')); // retorna a posição do digito na string
// -> 2

console.log(escola.indexOf('j')); // retorna -1 se não existir na string a letra passada
// -> -1

console.log(escola.substring(1)); // retorna uma substring partir da posição passada
// -> "od3r"

console.log(escola.substring(0, 3)); // retorna uma substring partir da posição passada (0 até 3 (menos 3))
// -> "Cod"

console.log('Escola '.concat(escola).concat("!")); // concatena as strings
// -> "Escola Cod3r!"

console.log(escola.replace(3, 'e')); // substitui o primeiro valor, pelo segundo valor
// -> "Coder"

console.log('Ana - Maria - Pedro'.split(' - ')); // dividi uma string pelo elemento passado como separador e retorna um array
// -> [ 'Ana', 'Maria', 'Pedro' ]