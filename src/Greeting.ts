import { Data } from "./Data";

interface Greeting extends Data {
    greet(): void;
}

let a1: Data = { name: "liz", age: 15 };
let a2: Greeting = { name: "luis", age: 89, greet() { console.log(`Hola ${this.name} tienes ${this.age} años`) } }
a2.greet();
console.log(a1.name + " " + a1.age);
