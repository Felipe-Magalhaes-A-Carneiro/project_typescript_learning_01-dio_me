//GETTERS E SETTERS
// GETTERS
/* Responsável por recuperarp valor de um atributo privado*/

class Usuario {
    private _nome: string;
    private _idade: number;

    constructor (nome: string, idade: number){
        this._nome = nome; // ' _ ' é uma representação de convenção para indicar que é um atributo privado
        this._idade = idade; 
    }

    //SETTERS
    // Definir ou modificar o valor de um atributo, com a opção de aplicar validações ou restrições
    set idade(novaIdade: number){
        if(novaIdade > 0){
            this._idade = novaIdade;
        } else {
            console.log("Idade inválida!");
        } 
    }

    get idade(): number{
        return this._idade;
    }

    get nome (): string{
        return this._nome;
    }
};

const user = new Usuario ("Felipe", 31);
console.log(user.nome, user.idade); // Chama o getter e exibe "Felipe"