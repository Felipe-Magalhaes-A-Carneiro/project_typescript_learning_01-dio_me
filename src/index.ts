//GETTERS E SETTERS
// GETTERS
/* Responsável por recuperarp valor de um atributo privado*/

class Usuario {
    private _nome: string;
    constructor (nome: string){
        this._nome = nome; // ' _ ' é uma representação de convenção para indicar que é um atributo privado 
    }

    get nome (): string{
        return this._nome;
    }
};

const user = new Usuario ("Felipe");
console.log(user.nome); // Chama o getter e exibe "Felipe"