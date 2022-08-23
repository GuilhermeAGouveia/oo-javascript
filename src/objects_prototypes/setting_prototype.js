const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name || "Person"}!`);
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!

//Using a constructor

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

const reuben = new Person('Reuben');
reuben.greet(); // hello, my name is Reuben!

//Own properties

const irma = new Person('Irma');

console.log(Object.hasOwn(irma, 'name')); // true
console.log(Object.hasOwn(irma, 'greet')); // false