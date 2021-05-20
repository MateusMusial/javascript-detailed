// "break" age no bloco mais proximo do tipo "for", "while" ou "switch"
// "continue" interrompe a repetição atual e pula para a proxima repetição, usado em "while" e "for".

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
  if (x == 5) {
    break;
  }
  console.log(`${x} = ${nums[x]}`);
  // -> 0 = 1
  // -> 1 = 2
  // -> 2 = 3
  // -> 3 = 4
  // -> 4 = 5
  // -> saiu da repetição pois "x == 5"
}

for (y in nums) {
  if (y == 5) {
    continue;
  }
  console.log(`${y} = ${nums[y]}`);
  // -> 0 = 1
  // -> 1 = 2
  // -> 2 = 3
  // -> 3 = 4
  // -> 4 = 5
  // -> não imprimiu.. pulou para a proxima repetição...
  // -> 6 = 7
  // -> 7 = 8
  // -> 8 = 9
  // -> 9 = 10
}

externo: for (a in nums) {
  for (b in nums) {
    if (a == 2 && b == 3) break externo; // se não tivesse o label sairia apenas do primeiro "for"
    console.log(`Par = ${a},${b}`);
    // -> Par = 0,0
    // -> Par = 0,1
    // -> Par = 0,2
    // -> Par = 0,3
    // -> Par = 0,4
    // -> Par = 0,5
    // -> Par = 0,6
    // -> Par = 0,7
    // -> Par = 0,8
    // -> Par = 0,9
    // -> Par = 1,0
    // -> Par = 1,1
    // -> Par = 1,2
    // -> Par = 1,3
    // -> Par = 1,4
    // -> Par = 1,5
    // -> Par = 1,6
    // -> Par = 1,7
    // -> Par = 1,8
    // -> Par = 1,9
    // -> Par = 2,0
    // -> Par = 2,1
    // -> Par = 2,2
    // -> saiu de ambos "for" pois o resultado ia ser "2,3"
  }
}

console.log('Fim!!');