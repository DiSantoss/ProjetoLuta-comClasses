// colocares de um lado Knight ou Sorcerer
// e LittleMonster ou BigMonster

//tem que ter o maximo de vida ou a vida atual de.e
// tem que ter obviamente o nome
// tem que ter a força de ataque e a força de defesa(vai ter forças diferentes)

//1° personagem por padrão

class Character {
    
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(newLife) {
        this._life = newLife < 0 ? 0 : newLife
    }
}


// agora vamos fazer as caracteristicas de cada um dos tipos de personagem que a gente tem


class Knight extends Character {
    constructor(name) {
        /**o super acessa o constructor do Character */
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }

}

class Sorcerer extends Character {
    constructor(name) {
        /**o super acessa o constructor do Character, e nesse caso define o nome */
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }

}


// criação dos monstros

class LittleMonster extends Character {
    constructor() {
        super("Little Monster");
        this.life = 40;
        this.maxLife = this.life;
        this.attack = 4;
        this.defense = 4;
        this.maxLife = this.life;
    }
} 

class BigMonster extends Character {
    constructor() {
        super("Big Monster");
        this.life = 120;
        this.maxLife = this.life;
        this.attack = 16;
        this.defense = 6;
        this.maxLife = this.life;
    }
} 


// classes do cenário
// criar o cenário

class Stage {
    constructor(fighter1,fighter2,fighter1El,fighter2El) { 
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
    }

    start() {
        this.update();
        // to do : Evento do botão de atacar
    }

    update() {
        // Fighter 1
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name
        // Fighter 2
        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name
    }
}
