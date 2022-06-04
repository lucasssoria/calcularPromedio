let chicos = Number(prompt("¿Cuantos jugadores son?: "));
let edades: number[] = new Array(chicos);
let min = 3;
let max = 7;
let suma = 0;
for (let i = 0; i < chicos; i++) {
  edades[i] = Math.floor(Math.random() * (max - min) + min);
  suma += edades[i];
}
let promedio = suma / chicos;
console.log(edades);
console.log(promedio);
