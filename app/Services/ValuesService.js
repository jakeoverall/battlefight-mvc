import Value from "../Models/Value.js";
import store from "../store.js";
console.log("step values service line 3")

Value
store

//Public
class ValuesService {
  constructor(){
    console.log("The values service has been constructed")
  }
}

const SERVICE = new ValuesService();
export default SERVICE;
