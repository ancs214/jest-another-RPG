//create constructor function for potion
function Potion(name) {
    //"this" keyword represents the instance of a new object created with the potion constructor function; new object will have this array under property "types"
    this.types = ['strength', 'agility', 'health'];
    //if name is not truthy, generate a random type of potion
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name === 'health') {
        this.value = Math.floor(Math.random() * 10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;