import STORE from "../store.js";

console.log("step values controller line 3")

//Public
export default class ValuesController {
  constructor() {

    console.log("The Values Controller Constructor")
    STORE.State.values
  }
}
