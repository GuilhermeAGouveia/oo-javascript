const Teacher = require("./Teacher");
const Student = require("./Student");

const walsh = new Teacher("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Teacher Walsh and I will be your Psychology Teacher.'

const summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'

console.log(summers.#year);

console.log(summers.canStudyArchery())
