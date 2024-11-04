// CLASSES

class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){  //Na hora que cria o objeto, você poderá recener suas propriedades
        this.name = name; //'this' ao usa-lo você se refere a algo da class que ele está dentro
        this.stregth = stregth;
        this.skill = skill;
    };

    attack(): void {
        console.log(`${this.name} attacks with ${this.stregth} points. `);
    }

};

// outros detalhes para aprender:
// DATA MODIFIERS - MODIFICADORES DE ACESSO:
/* Tipos:
    public (público)
    private (privado)
    protected (protegido)
*/

class Character2 {
    private name?: string; //Ao utilizarmos 'private' significa que ela só pode ser acessada dentro da classe
    protected stregth: number; // 'protected' só pode ser visto dentro da classe e subclasses que herdem essa classe
    skill: number;

    constructor(name: string, stregth: number, skill: number){  // Utilizando 'name' como método contrutor
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    };

    public Defense(): void { // Utilizando 'public' é o mesmo se eu não o declarrase, portanto a forma deafult de declaração já é public. Obs.: Como pode ser visto, os 'Data modifiers' também podem ser aplicaods em 'métodos'
        console.log(`${this.name} defends with ${this.stregth} points. `);
    }

};

const p1 = new Character("Optimus Prime", 25, 20);
console.log(p1);
p1.attack();