//create constructor function for potion
function Potion(name) {
    //create potion object's "types" property options
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