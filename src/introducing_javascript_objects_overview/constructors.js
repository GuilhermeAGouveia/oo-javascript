const {Person, createPerson} = require("./Person")


const salva = createPerson('Salva');
salva.name;
salva.introduceSelf();

const frankie = new Person('Frankie');
frankie.name;
frankie.introduceSelf();