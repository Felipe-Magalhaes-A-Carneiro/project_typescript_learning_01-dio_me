// CLASSES

class Character {
    name: string;
    stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){  //Na hora que cria o objeto, você poderá recener suas propriedades
        this.name = name; //'this' ao usa-lo você diz sobre a class que ele está dentro
        this.stregth = stregth;
        this.skill = skill;
    };

    attack(): void {
        console.log(`Attack with ${this.stregth} points. `);
    }

};

// outros detalhes para aprender:

class Character2 {
    name?: string; // o uso do '?' significa 'opcional' logo, não é necessário atribuir o name no 'constructor' e nem defini-lo.
    stregth: number;
    skill: number;

    constructor(stregth: number, skill: number){  //Na hora que cria o objeto, você poderá recener suas propriedades
        this.stregth = stregth;
        this.skill = skill;
    };

};