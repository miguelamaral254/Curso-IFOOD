/*
Peso leve: lutadores com peso mais leve que 55 kg;

Peso meio-médio:  categoria mais pesada que a anterior e com pesos mais leves que 65 kg;

peso médio: categoria mais pesada que a anterior e com pesos mais leves que 75 kg;

Peso meio-pesado: categoria mais pesada que a anterior e com pesos mais leves que 85 kg;

Peso pesado: pesos maiores ou iguais a 85 kg.

A regra do evento é: os lutadores só podem lutar com lutadores da mesma categoria.
*/



function solucao(peso1, peso2) {
    function determinarCategoria(peso){
        if (peso < 55){
            return 'Peso leve'
        }
        if (peso < 65){
            return 'Peso meio-médio'
        }
        if (peso < 75){
            return 'Peso médio'
        }
        if (peso < 85){
            return 'Peso meio-pesado'
        }
        if (peso >= 85){
            return 'Peso pesado'
        }
       
    }
    
    let categoriaPeso1 = determinarCategoria(peso1);
    let categoriaPeso2 = determinarCategoria(peso2);

    if (categoriaPeso1 === categoriaPeso2) {
    return "PODEM LUTAR";
    } else {
    return "NAO PODEM LUTAR";
    }
}
    

let pesoLutador1 = 65; // Peso do primeiro lutador em kg
let pesoLutador2 = 65; // Peso do segundo lutador em kg  
let resultadoLuta = solucao(pesoLutador1, pesoLutador2);
console.log(resultadoLuta);