import { Weapon } from "./Weapon"

export class Player {
  constructor() {
    this.name = prompt("What is your name?")
    this.health = 100
    this.experience = 0
    this.weapon = new Weapon("fist", 1, 0)
  }
}

