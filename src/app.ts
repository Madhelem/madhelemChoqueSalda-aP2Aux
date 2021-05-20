/**Cree una clase llamada “Person”
- Agregue las siguientes propiedades a la clase:
o name: su nombre completo
o age: su edad
o greet: un método para saludar
- Cree una interfaz para la clase “Person” y relacionela
- Divida las propiedades de la interfaz creada en dos interfaces diferentes (Data y Greeting), en” Data” estarán: “name” y “age” y en “Greeting” estarán solamente el método “greet”
- Herede las propiedades de “Data” a la “Greeting”
- Agregue una propiedad mas a “Data” con el nombre “lastname” y modifíquela de tal manera que sea opcional al momento de implementarla a una clase */


//-->import { InterfazPerson } from "./InterfazPerson";

import { Data } from "./Data";

//esto es para probar el atributo lastname
class Person implements Data {
    name: String;
    age: Number;
 

    constructor(name: String, age: Number, lastname?: String) {
        this.name = name;
        this.age = age;
       
    }
}


const run1: Person = new Person("juan", 40);

const run2: Person = new Person("maria", 48, "Zanches");
