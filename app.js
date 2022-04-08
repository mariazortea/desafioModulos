/*.js */
const {calculaIdade, calculaIMC} = require('./funcoes.js');

const anoNasc = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

console.log(calculaIdade(anoNasc));
console.log(calculaIMC(peso, altura));