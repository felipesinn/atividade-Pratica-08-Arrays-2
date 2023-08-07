function verificarNumPrimo(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function encontrarNumerosPerfeitos(quantidade) {
  const numerosPerfeitos = [];
  let num = 2;

  while (numerosPerfeitos.length < quantidade) {
    const numeroIndtificadorPrimo = 2 ** num - 1;
    if (verificarNumPrimo(num) && verificarNumPrimo(numeroIndtificadorPrimo)) {
      const perfeito = 2 ** (num - 1) * numeroIndtificadorPrimo;
      numerosPerfeitos.push(perfeito);
    }
    num++;
  }

  return numerosPerfeitos;
}

const quantidadeNumerosPerfeitos = 4;
const numerosPerfeitosEncontrados = encontrarNumerosPerfeitos(
  quantidadeNumerosPerfeitos
);

console.log(
  "Os " +
    quantidadeNumerosPerfeitos +
    " primeiros números perfeitos são: " +
    numerosPerfeitosEncontrados.join(", ")
);

// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
