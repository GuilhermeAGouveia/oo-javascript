const Person = require("./Person")

class Student extends Person {
    #year;
    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`My name is ${this.name} and I'm in the ${this.#year}º year.`)
    }

    canStudyArchery() { return this.year > 1 }
}

module.exports = Student;