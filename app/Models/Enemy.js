import { Weapon } from "./Weapon";

export class Enemy {
  /**
   *
   * @param {string} name
   * @param {number} health
   * @param {number} experienceGivenOnDeath
   * @param {Weapon} weapon
   */
  constructor(name, health, experienceGivenOnDeath, weapon) {
    this.name = name;
    this.health = health;
    this.experienceGivenOnDeath = experienceGivenOnDeath;
    this.weapon = weapon;
  }

}
