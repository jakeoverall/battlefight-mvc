import STORE from "../store.js"

let _playerElem = document.getElementById("player")


function _drawPlayer() {
  let player = STORE.State.player

  _playerElem.innerHTML = /*html*/`
    <div class="card p-2">
      <div className="card-title">
        Name: ${player.name} Health: ${player.health}
      </div>
      <div className="card-body">
        <div>
          Experience: ${player.experience}
        </div>  
        <div>
          Weapon: ${player.weapon.name}
        </div>
      </div>
    </div>
  `

}

export class PlayerController {

  constructor() {
    _drawPlayer()
  }
}
