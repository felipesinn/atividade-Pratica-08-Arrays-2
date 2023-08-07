function armazenaNomes() {
  const nomes = [];
  for (let i = 0; i < 5; i++) {
    const nome = prompt(`Digite o ${i + 1}º nome:`);
    nomes.push(nome);
  }

  const ordemInserida = nomes.join(', ');
  const ordemInversa = nomes.reverse().join(', ');

  console.log(`\nSaída na ordem inserida: ${ordemInserida}`);
  console.log(`Saída na ordem inversa: ${ordemInversa}`);
}
armazenaNomes();

// 6. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
// e que exiba a lista desses nomes na tela. Após exibir essa lista, o
// programa deve mostrar também os nomes na ordem inversa em
// que o usuário os digitou.

// Ex:
// Entrada: Édson, Marcelo, Letícia, Ju, Thobias
// Saída: Thobias, Ju, Letícia, Marcelo, Édson