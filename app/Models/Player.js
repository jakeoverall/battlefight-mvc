import { Weapon } from "./Weapon.js"

export class Player {
  constructor() {
    // FIXME dont forget to actually do this thing
    this.name =  "Jake"//prompt("What is your name?")
    this.health = 100
    this.experience = 0
    this.weapon = new Weapon("fist", 1, 0)
  }
}

