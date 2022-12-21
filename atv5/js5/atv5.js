var veiculos = [
  'Marca: Toyota', 
'Modelo: SW4 2.8 TDI SRX', 
'Cor: Prata', 'Ano: 2023',
'Renavam: 85456654444',
'Placa: PUD-2537'];

// obter um elemento do documento a partir de seu IDatributo 
var divVeiculos = document.getElementById('veiculos');

/*
// Percorre o array de veiculos e adiciona cada um à div
for (var i = 0; i < veiculos.length; i++) {
  var veiculo = veiculos[i];
  divVeiculos.innerHTML += '<p>' + veiculo + '</p>';
}
*/

function pulaLinha() {
  
  document.write("<br>")

}

document.write(`${veiculos[0]}`);
pulaLinha();
document.write(`${veiculos[1]}`);
pulaLinha();
document.write(`${veiculos[2]}`);
pulaLinha();
document.write(`${veiculos[3]}`);
pulaLinha();
document.write(`${veiculos[4]}`);
pulaLinha();
document.write(`${veiculos[5]}`);
