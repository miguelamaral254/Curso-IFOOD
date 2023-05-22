function solucao(pesos) {
    let diferencaPeso = Math.abs(pesos[0] - pesos[1]); //valor absoluto da diferença de peso entre os lutadores.
  
    if (diferencaPeso <= 5) {
      return "PODEM LUTAR";
    } else {
      return "NAO PODEM LUTAR";
    }
  }
  
  
  let pesosLutadores = [65, 68]; 
  
  let resultadoLuta = solucao(pesosLutadores);
  console.log(resultadoLuta);