import { Enemy } from "../Models/Enemy.js";
import STORE from "../store.js";
import { enemyWeapons } from "../WeaponsCatalog.js";


class EnemyService {

  /**
   * @param {Enemy} enemyData
   */
  createEnemy(enemyData) {
    let enemy = new Enemy(enemyData.name, enemyData.health, enemyData.experienceGivenOnDeath, enemyWeapons.teeth, enemyData.type)
    STORE.State.enemies.push(enemy)
  }

}

export const enemyService = new EnemyService()