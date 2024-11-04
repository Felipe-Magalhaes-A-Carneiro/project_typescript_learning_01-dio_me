"use strict";
// CLASSES
class Character {
    constructor(name, stregth, skill) {
        this.name = name; //'this' ao usa-lo você se refere a algo da class que ele está dentro
        this.stregth = stregth;
        this.skill = skill;
    }
    ;
    attack() {
        console.log(`${this.name} attacks with ${this.stregth} points. `);
    }
}
;
// outros detalhes para aprender:
// DATA MODIFIERS - MODIFICADORES DE ACESSO:
/* Tipos:
    public (público)
    private (privado)
    protected (protegido)
*/
class Character2 {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    ;
    Defense() {
        console.log(`${this.name} defends with ${this.stregth} points. `);
    }
}
;
const p1 = new Character("Optimus Prime", 25, 20);
console.log(p1);
p1.attack();
