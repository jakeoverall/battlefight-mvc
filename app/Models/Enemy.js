import { Weapon } from "./Weapon.js";

export class Enemy {
  /**
   *
   * @param {string} name
   * @param {number} health
   * @param {number} experienceGivenOnDeath
   * @param {Weapon} weapon
   * @param {"Orc" | "Troll" | "Bunny"} type
   */
  constructor(name, health, experienceGivenOnDeath, weapon, type) {
    this.name = name;
    this.health = health;
    this.experienceGivenOnDeath = experienceGivenOnDeath;
    this.weapon = weapon;
    this.type = type;
  }
}