console.log("step Value Model line 1")

export default class Value {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}