import { Hammer } from "./hammer";
import { Manager } from "./manager";
import { Nail } from "./nail";

const hammer = new Hammer(5);
const hammer2 = new Hammer(13);
const hammer3 = new Hammer(0);
const nail = new Nail("鉄");
const nail2 = new Nail("生もの");

const manager = new Manager();
manager.register("five", hammer);
manager.register("unluck", hammer2);
manager.register("zero", hammer3);
manager.register("metal", nail);
manager.register("fresh", nail2);

const newHammer = manager.create("five");
const newHammer2 = manager.create("unluck");
const newHammer3 = manager.create("zero");
const newNail = manager.create("metal");
const newNail2 = manager.create("fresh");

console.log(newHammer === hammer);
console.log(newHammer2 === hammer2);
console.log(newHammer3 === hammer3);
console.log(nail === newNail);
console.log(nail2 === newNail2);

console.log("");
newHammer.use();
console.log("");
newHammer2.use();
console.log("");
newHammer3.use();
console.log("");
nail.use();
console.log("");
nail2.use();
