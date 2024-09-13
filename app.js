function exibeNaTelaSorteados(numSorteado) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numSorteado}</label>`;
}

function alterarStatusBotao() {
  let botao = document.getElementById("btn-reiniciar");
  if (botao.classList.contains("container__botao-desabilitado")) {
    botao.classList.remove("container__botao-desabilitado");
    botao.classList.add("container__botao");
  } else {
    botao.classList.remove("container__botao");
    botao.classList.add("container__botao-desabilitado");
  }
}

function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let numero;
  let sorteados = [];

  if (validarDados()) {
    for (let i = 0; i < quantidade; i++) {
      numero = obterNumeroAleatorio(de, ate);

      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de, ate);
      }

      sorteados.push(numero);
    }
    exibeNaTelaSorteados(sorteados);
    alterarStatusBotao();
  } else {
    alterarStatusBotao();
    reiniciar();
  }
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
  alterarStatusBotao();
}

function validarDados() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);

  if (quantidade <= 0) {
    alert("Quantidade não pode ser igual ou menor que zero!");
    return false;
  } else if (quantidade >= ate - de) {
    alert("Quantidade de numeros solicitada maior que o intervalo definido.");
    return false;
  } else {
    if (de >= ate) {
      alert(
        "Dados incorretos, verifique o seu intervalo de números (de não pode ser igual ou maior que o até"
      );
      return false;
    } else {
      return true;
    }
  }
}
