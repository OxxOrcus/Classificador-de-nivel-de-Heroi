// Entrada de dados
let nomeHeroi = prompt("Digite o nome do herói:");
let xpHeroi = parseInt(prompt("Digite a quantidade de XP do herói:"));

// Variável para armazenar a faixa de XP
let faixaXP;

if (xpHeroi < 1000) {
  faixaXP = 1;
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  faixaXP = 2;
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  faixaXP = 3;
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  faixaXP = 4;
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  faixaXP = 5;
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  faixaXP = 6;
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  faixaXP = 7;
} else {
  faixaXP = 8;
}

// Estrutura switch para determinar o nível com base na faixaXP
let nivel;

switch (faixaXP) {
  case 1:
    nivel = "Ferro";
    break;
  case 2:
    nivel = "Bronze";
    break;
  case 3:
    nivel = "Prata";
    break;
  case 4:
    nivel = "Ouro";
    break;
  case 5:
    nivel = "Platina";
    break;
  case 6:
    nivel = "Ascendente";
    break;
  case 7:
    nivel = "Imortal";
    break;
  case 8:
    nivel = "Radiante";
    break;
  default:
    nivel = "Nível desconhecido";
}

// Saída final
alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
