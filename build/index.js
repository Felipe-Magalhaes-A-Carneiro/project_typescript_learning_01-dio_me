"use strict";
// GENERICS
function concatenarArray(...itens) {
    return new Array().concat(...itens);
}
// Usando a função criada acima:
const numerosArray = concatenarArray([1, 2], [3]); //utilizo a função para aceitar números
const nomesArray = concatenarArray(["Felipe ", "Magalhaes "], ["Araujo "]); // utilizo a mesma função para aceitar textos
//Fazendo a função se tornar 'generic', logo ela pode aceitar tudo. Isso pode não ser bom para a segurança.
// Prova da falta de segurança é adicionar texto em algo que tem números:
numerosArray.push(" Carneiro.");
console.log(numerosArray);
console.log(nomesArray);
