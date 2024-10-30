"use strict";
//TIPOS DE VARIÁVEIS 1 - PRIMITIVAS*/
//BOOLEAN 
let ligado = true; // Declarando o seu tipo (boolean, no caso)
let desligado = false; // Não declarando o seu tipo, mas ele entende que é boolean
// Ambas as declaraçõe estão corretas para o Typescript. 
//Obs.: na variável 'ligado', a sua declaração se assemelha às declarações necessárias na linguagem Java
//STRING
let nome = "Felipe ";
let sobreNome = "Magalhaes";
// NUMBER
let idade = 30;
let valor = 30;
let altura = 1.90; //A declaração não é impedida ao usar números decimais.
//TIPOS DE VARIÁVEIS 2 - ESPECIAIS:
// NULL / UNDEFINED
let nulo = null; //Exemplo de aplicação: O 'null' é usado para situações especificas; ligadas ao retorno (return) de uma aplicação deve dar 'null', por exemplo. 
let indefinido = undefined; // A lógica é a mesma para o 'null', ajuda, por exemplo, a manter a segurança de uma 'propriedade' para que ninguém a altere
//TIPOS DE VARIÁVEIS 3 - ABRANGENTES:
// VOID
let retorno; // Usado para que não retorne nada. Obs.: Não há necessidade de atribuir nenhum valor
//Utilizando em 'function':
function executaQuery() {
}
;
// ANY:
let retornoView = "Felipe"; // 'Any' aceita qualquer coisa.
let retornaValor = 123;
//Quando ele é usado? R.: Quando você tem uma 'function' que o seu valor não é previsivel
//OBJETOS:
// Objeto - sem previsibilidade (sem propriedades)
let produto = {
    name: "felipe",
    idade: 31,
};
//Utilizando o objeto com propriedades:
//Uma vez criada o tipo (type) de objeto e definidas as suas propriedades, podemos agora 'chama-las' e usa-las de acordo com a necessidade
let meuProduto = {
    nome: "Tênis",
    unidades: 16,
    preco: 289.99,
};
//Obs.: Se você não utilizar todas as propriedades do objeto (ProdutoLoja, no caso), a variável criada (meuProduto, no caso) será considera um erro pelo Typescript, não permitindo dar continuidade. 
//ARRAYS (Vetores)
let dados = ["Felipe", "Ana", "Adriana"];
//Outra maneira de declarar Arrays:
let dados2 = ["Felipe", "Ana", "Adriana"];
//ARRAYS DE MULTI TYPES:
let infos = ["Felipe", "Ana", "Adriana"];
//Obs.: Você consegue criar um vetor que aceita mais de um tipo, no caso, apenas string e number serão aceitas, se quiser utilizar um boolean não será possível, por exemplo. E sim, é possível ser mais de duas, se quiser.
//TUPLAS:
//Vetores de Multi TYPEs, porém você o usa em um 'local' certo. Ao usa-la, suas propriedades devem ser utilizadas na mesma ordem que foram atribuídas.
let boleto = ["água conta", 199.90, 342412456];
//ARRAYS - MÉTODOS
// Métodos são feitos da mesma forma que no Javascript
dados.pop();
//DATE(Data)
let aniversario = new Date("2024-10-30 16:30");
console.log(aniversario.toString());
