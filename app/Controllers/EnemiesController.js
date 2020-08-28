import { enemyService } from "../Services/EnemyService.js"
import STORE from "../store.js"

function _drawEnemies() {
  let htmlToPutOnTheScreen = ''
  STORE.State.enemies.forEach(enemy => {
    htmlToPutOnTheScreen += /*html*/`
      <div className="card p-2">
        <div className="card-body">
          <div className="border-bottom">
            ${enemy.name} - ${enemy.health}
          </div>  
          <div>
            ${enemy.weapon.name}
          </div>
        </div>
      </div>
    `
  })

  document.getElementById("enemies").innerHTML = htmlToPutOnTheScreen

}

export class EnemiesController {

  constructor() {
    _drawEnemies()
  }

  createEnemy() {
    event.preventDefault()
    let form = event.target

    let enemyData = {
      name: form["name"].value,
      health: form["health"].value,
      experienceGivenOnDeath: form["experienceGivenOnDeath"].value,
      type: form["type"].value,
    }

    // @ts-ignore
    enemyService.createEnemy(enemyData)
    _drawEnemies()

  }

}
