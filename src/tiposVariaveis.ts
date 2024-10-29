//TIPOS DE VARIÁVEIS 1 - PRIMITIVAS*/

//BOOLEAN 
let ligado : boolean = true; // Declarando o seu tipo (boolean, no caso)
let desligado = false; // Não declarando o seu tipo, mas ele entende que é boolean

// Ambas as declaraçõe estão corretas para o Typescript. 
//Obs.: na variável 'ligado', a sua declaração se assemelha às declarações necessárias na linguagem Java

//STRING
let nome : string = "Felipe ";
let sobreNome = "Magalhaes";

// NUMBER
let idade : number = 30;
let valor = 30;
let altura : number = 1.90; //A declaração não é impedida ao usar números decimais.

//TIPOS DE VARIÁVEIS 2 - ESPECIAIS:

// NULL / UNDEFINED
let nulo : null = null; //Exemplo de aplicação: O 'null' é usado para situações especificas; ligadas ao retorno (return) de uma aplicação deve dar 'null', por exemplo. 
let indefinido : undefined = undefined; // A lógica é a mesma para o 'null', ajuda, por exemplo, a manter a segurança de uma 'propriedade' para que ninguém a altere

//TIPOS DE VARIÁVEIS 3 - ABRANGENTES:

// VOID
let retorno : void; // Usado para que não retorne nada. Obs.: Não há necessidade de atribuir nenhum valor

//Utilizando em 'function':
function executaQuery(): void{

};

// ANY:
let retornoView : any = "Felipe"; // 'Any' aceita qualquer coisa.
let retornaValor : any = 123;

//Quando ele é usado? R.: Quando você tem uma 'function' que o seu valor não é previsivel

//OBJETOS:
// Objeto - sem previsibilidade (sem propriedades)
let produto : object = {
    name : "felipe",
    idade : 31,
};

// Objeto "tipado" -  com previsibilidade (com propriedades)
type ProdutoLoja = {
    nome : string;
    preco : number;
    unidades : number;
};

//Utilizando o objeto com propriedades:
//Uma vez criada o tipo (type) de objeto e definidas as suas propriedades, podemos agora 'chama-las' e usa-las de acordo com a necessidade
let meuProduto : ProdutoLoja = {
    nome : "Tênis",
    unidades : 16,
    preco : 289.99, 
}

//Obs.: Se você não utilizar todas as propriedades do objeto (ProdutoLoja, no caso), a variável criada (meuProduto, no caso) será considera um erro pelo Typescript, não permitindo dar continuidade. 

