import Value from "./Models/Value.js";
console.log("step store line 2")


let _state = {
  activeValue: new Value({ title: "Value" }),
  /** @type {Value[]} */
  values: []
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
