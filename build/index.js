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
class Character2 {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    ;
}
;
const p1 = new Character("Optimus Prime", 25, 20);
console.log(p1);
p1.attack();
