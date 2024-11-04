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
//SUBCLASSES
// Uma classe que herda de outra classe. Conceito de herança
class Robot extends Character {
    constructor(name, stregth, skill, expPoints) {
        super(name, stregth, skill); // 'super' para invocar o constructor da classe 'pai', no caso 'Character' para o filho 'Robot'
        this.expPoints = expPoints;
    }
    ;
}
;
const p1 = new Character("Optimus Prime", 25, 20);
console.log(p1);
const p2 = new Robot("Bumblebee", 10, 7, 100);
console.log(p2);
p1.attack();
