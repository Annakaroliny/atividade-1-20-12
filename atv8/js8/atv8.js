var dinheiro = prompt("Quanta grana você tem?");

var precoCombustivel = 6.29;
var consumo = 26;

var QuantidadeCombustivel = dinheiro / precoCombustivel;
var distancia = QuantidadeCombustivel * consumo;

console.log(`Com R$ ${dinheiro} você pode comprar ${QuantidadeCombustivel.toFixed(2)} litros de combustível e percorrer ${distancia.toFixed(2)} Km`);

document.write(`Com R$ ${dinheiro} você pode comprar ${QuantidadeCombustivel.toFixed(2)} litros de combustível e percorrer ${distancia.toFixed(2)} Km`);

