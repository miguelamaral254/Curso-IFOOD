function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    // Verifica se todos os três itens necessários estão presentes nos itens coletados
    if (
      itensColetados.includes(itemNecessario1) &&
      itensColetados.includes(itemNecessario2) &&
      itensColetados.includes(itemNecessario3)
    ) {
      return "PODE ENFRENTAR";
    } else {
      return "NAO PODE ENFRENTAR";
    }
  }
  
  // Exemplo de uso:
  const itensColetados = ["capa", "arco", "flecha", "machado", "escudo", "comida", "sapato", "capacete", "espada"];
  const itemNecessario1 = "machado";
  const itemNecessario2 = "espada";
  const itemNecessario3 = "sapato";
  
  const resultado = solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3);
  console.log(resultado); // Saída: NAO PODE ENFRENTAR