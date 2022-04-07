const Potion = require('../lib/Potion');

//if no name provided, parameter sets to a default empty string
function Player(name = '') {
    this.name = name;
  
    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
  
     //??????????????inventory will have a new potion health and new potion?
    this.inventory = [new Potion('health'), new Potion()];
  }
  
  //when using prototype, you are only creating the method once on the constructor itself instead of for each player created. New player objects will inherit the method from the constructor rather than having their own instances of that method. Inheritance can traverse multiple levels...this is called the PROTOTYPE CHAIN.

  // ****** using arrow function changes the meaning of "this" to the parent lexical scope instead of the scope of the method so we cannot use here!! *****

  //returns object with various player properties
  Player.prototype.getStats = function() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
  };
  
  //returns inventory array or false if empty
  Player.prototype.getInventory = function() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };
  
  Player.prototype.getHealth = function() {
    return `${this.name}'s health is now ${this.health}!`;
  };
  
  Player.prototype.isAlive = function() {
    if (this.health === 0) {
      return false;
    }
    return true;
  };

  Player.prototype.reduceHealth = function(health) {
    this.health -= health;
  
    if (this.health < 0) {
      this.health = 0;
    }
  };
  
  Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
  
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
  };

  Player.prototype.usePotion = function(index) {
    //splice removes items from array and returns removed items as a new array
    //original inventory array has a single Potion removed at the specified index value and put into a new "removed items" array, then the Potion at index [0] of this "removed items" array is saved in a potion variable.
    const potion = this.getInventory().splice(index, 1)[0];
  
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
  };


  module.exports = Player;


//PREVIOUS CONSTRUCTOR METHODS USING "this" instead of "prototype"
 
// function Player(name = '') {
//     this.name = name;
  
//     this.health = Math.floor(Math.random() * 10 + 95);
//     this.strength = Math.floor(Math.random() * 5 + 7);
//     this.agility = Math.floor(Math.random() * 5 + 7);
  
//     this.inventory = [new Potion('health'), new Potion()];
  
//     this.getStats = function() {
//       return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//       };
//     };
  
//     this.getInventory = function() {
//       if (this.inventory.length) {
//         return this.inventory;
//       }
//       return false;
//     };
//   }
