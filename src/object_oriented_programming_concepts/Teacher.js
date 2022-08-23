const Person = require("./Person.js")

class Teacher extends Person {
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }

    grade() {
        console.log(`I teach ${this.teaches}`)
    }


    introduceSelf() {
        console.log(`My name is Professor ${this.name} and I will be your ${this.teaches} professor.`)
    }

}

module.exports = Teacher;