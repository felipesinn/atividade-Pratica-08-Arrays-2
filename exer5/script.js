function verificarNumero(vetor, numero) {
    for (let i = 0; i < vetor.length; i++) {
      if (vetor[i] === numero) {
        return true;
      }
    }
    return false;
  }

  const numInteiros = [1, 2, 3, 4, 5,];
  const num = 5;
  
  const resultado = verificarNumero(numInteiros, num);
  
  console.log(resultado); 
  
// 5. Crie uma função que recebe um vetor de inteiros e um número
// inteiro e retorne verdadeiro se o número faz parte do vetor ou falso
// se não faz parte.