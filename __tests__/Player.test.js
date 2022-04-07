const Potion = require('../lib/Potion');
//substitute mock data when running Potion function
jest.mock('../lib/Potion.js');

const Player = require('../lib/Player');

test ('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});

test("gets player's stats as an object", () => {
    const player = new Player('Dave');
  
    //checking that player.getStats() returns an object w four specific properties
    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
  });
  
  test('gets inventory from player or returns false', () => {
    const player = new Player('Dave');
    //on new player creation, player.get Inventory() should return an array
    expect(player.getInventory()).toEqual(expect.any(Array));
    //simulate an empty inventory array, which needs to return false
    player.inventory = [];
    expect(player.getInventory()).toEqual(false);
  });
  