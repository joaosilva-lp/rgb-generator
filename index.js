const btn = document.getElementById("botao");
let resultado = document.getElementById("resultado");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

btn.addEventListener("click",function fundo(){
    
    let cor = 'RGB('+getRandomInt(256)+','+getRandomInt(256)+','+getRandomInt(256)+')';
    document.getElementById("mostrador").style.background = cor;
    resultado.textContent = `You selected the color ${cor}`;

});