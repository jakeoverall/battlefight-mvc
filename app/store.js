import { Enemy } from "./Models/Enemy.js";
import { Player } from "./Models/Player.js";
import { enemyWeapons, playerWeapons } from "./WeaponsCatalog.js";

let _state = {
  player: new Player(),
  enemies: [
    new Enemy("Steve the bunny", 3, 1, enemyWeapons.teeth, "Bunny"),
    new Enemy("Big Bunny", 3, 1, enemyWeapons.teeth, "Bunny"),
    new Enemy("Troll", 3, 1, enemyWeapons.club, "Troll"),
  ],
  playerWeapons: playerWeapons
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
