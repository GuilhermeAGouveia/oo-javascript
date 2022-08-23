const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
  };

person.name
person.name[0]
person.age
person.bio()
person.introduceSelf()

person['eyes'] = 'hazel';
person.farewell = function() {
  console.log('Bye everybody!');
}

person['eyes']
person.farewell()

const myDataName = 'height';
const myDataValue = '1.75m';
person[myDataName] = myDataValue;

person.height