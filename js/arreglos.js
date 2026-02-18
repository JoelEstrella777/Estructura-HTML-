let numeros = [1, 2, 3, 4, 5, 7, 9, 10, 20, 27, 33, 36, 42, 49, 54, 60];
let pares = [];
let impares = [];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
  if(numeros[i] % 2 === 0) {
    pares.push(numeros[i]);
  } else {
    impares.push(numeros[i]);
  }
}

console.log(pares);
console.log(impares);
