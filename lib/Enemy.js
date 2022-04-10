const Potion = require('./Potion');
const Character = require('./Character');

class Enemy extends Character {
  constructor(name, weapon) {
    //super keyword is how we reference the parent object. calling super() will call the constructor() of the parent. passing in 'name' will pass the name argument into that parent constructor (where name and other properties like 'health' are officially defined). afterwards, the player class will add any add'l properties to the object.
    super(name);

    this.weapon = weapon;
    this.potion = new Potion();
  }

  //create new object that inherits Character methods
  // Enemy.prototype = Object.create(Character.prototype);

  getDescription() {
    return `A ${this.name} holding a ${this.weapon} has appeared!`;
  }
}

  module.exports = Enemy;