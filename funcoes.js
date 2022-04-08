/* funcoes.js */
function calculaIdade(anoNasc) {
    return 2022 - anoNasc  ;
}
module.exports.calculaIdade = calculaIdade;

function calculaIMC(peso, altura) {
    return  peso / (altura * altura);  
  }
  module.exports.calculaIMC = calculaIMC;