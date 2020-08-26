import { Enemy } from "./Models/Enemy.js";
import { Player } from "./Models/Player.js";
import Value from "./Models/Value.js";
import { enemyWeapons, playerWeapons } from "./WeaponsCatalog.js";

let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: [],
  player: new Player(),
  enemies: [
    new Enemy("Steve the bunny", 3, 1, enemyWeapons.teeth),
    new Enemy("Big Bunny", 3, 1, enemyWeapons.teeth),
    new Enemy("Troll", 3, 1, enemyWeapons.club),
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
