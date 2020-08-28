import { EnemiesController } from "./Controllers/EnemiesController.js";
import { PlayerController } from "./Controllers/PlayerController.js";
class App {
  playerController = new PlayerController()
  enemiesController = new EnemiesController()
}

window["app"] = new App();
