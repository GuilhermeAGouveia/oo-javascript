class Person {
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hi! I'am ${this.name}`)
    }
    
}

module.exports = Person;