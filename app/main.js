import ValuesController from "./Controllers/ValuesController.js";

console.log("This is step number ??????")


console.log("Class App line 6")
class App {
  valuesController = new ValuesController();
}

console.log("Class App line 11")
window["app"] = new App();
console.log("Class App line 13")

console.log("This is the final step")
