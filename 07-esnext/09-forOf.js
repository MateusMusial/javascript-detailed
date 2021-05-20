// Enquanto o "for ... in" itera em cima de indices, o "for ... of" itera sobre valores

for (let letra of "Cod3r") {
  console.log(letra);
}
// -> C
// -> o
// -> d
// -> 3
// -> r

const assuntosEcma = ["Map", "Set", "Promise"];

// percorremos apartir do indice..
for (let i in assuntosEcma) {
  console.log(i);
}
// -> 0
// -> 1
// -> 2

// percorremos apartir dos valores..
for (let assunto of assuntosEcma) {
  console.log(assunto);
}
// -> Map
// -> Set
// -> Promise

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto);
}
// -> [ 'Map', { abordado: true } ]
// -> [ 'Set', { abordado: true } ]
// -> [ 'Promise', { abordado: false } ]

// percorrendo apartir das "chaves"
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}
// -> Map
// -> Set
// -> Promise

// percorrendo apratir dos "valores"
for (let valor of assuntosMap.values()) {
  console.log(valor);
}
// -> { abordado: true }
// -> { abordado: true }
// -> { abordado: false }

// usado o perador destructuring...
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}
// -> Map { abordado: true }
// -> Set { abordado: true }
// -> Promise { abordado: false }

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra);
}
// -> a
// -> b
// -> c