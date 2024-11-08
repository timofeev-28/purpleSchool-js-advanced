'use strict';

const Person = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}
Person.prototype.speak = function() {
    console.log(`Язык: ${this.language} - ${this.name}`)
}
//--------------------

const Orc = function(race, name, language, weapon) {
    Person.apply(this, arguments);
    this.weapon = weapon;
}
Orc.prototype = Object.create(Person.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.kick = function() {
    console.log('Совершён удар');
}
//--------------------

const Elf = function(race, name, language, spell) {
    Person.apply(this, arguments);
    this.spell = spell;
}
Elf.prototype = Object.create(Person.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.createSpell = function() {
    console.log('Сотворено заклинание');
}
//--------------------


let orc1 = new Orc('rus', 'ivan', 'russian', 'axe');
let orc2 = new Orc('fin', 'yussi', 'finnish', 'spear');

let elf1 = new Elf('rus', 'ivan', 'russian', 'ice');
let elf2 = new Elf('fin', 'yussi', 'finnish', 'fire');

// -- вывод в консоль --
console.log(orc1);
console.log(orc2);
orc1.speak();
orc1.kick();
orc2.speak();
orc2.kick();

console.log(elf1);
console.log(elf2);
elf1.speak();
elf1.createSpell();
elf2.speak();
elf2.createSpell();
