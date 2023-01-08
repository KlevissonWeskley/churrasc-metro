let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultados")

let botao = document.getElementById("btn")

function calc(){
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let totalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
  let totalCerveja = cervejaPP(duracao) * adultos
  let totalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas)
  
  resultado.innerHTML = `<p>${totalCarne / 1000}kg de carne`
  resultado.innerHTML += `<p>${Math.ceil(totalCerveja / 355)} latas de cerveja`
  resultado.innerHTML += `<p>${Math.ceil(totalBebida / 2000)} garrafas de bebida`
  btn.style.display = "none"
}

function carnePP(duracao){
  if (duracao >= 6){
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(duracao){
  if (duracao >= 6){
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPP(duracao){
  if (duracao >= 6){
    return 1500;
  } else {
    return 1000;
  }
}