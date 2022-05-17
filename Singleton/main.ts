import { RazySingleton } from "./razy-singleton";
import { Singleton } from "./singleton";

console.log("start!");
const singleton1 = Singleton.getInstance();
console.log("getInstance1");
const singleton2 = Singleton.getInstance();
console.log("getInstance2");

console.log("razy start!");
const razySingleton1 = RazySingleton.getInstance();
console.log("getRazyInstance1");
const razySingleton2 = RazySingleton.getInstance();
console.log("getRazyInstance2");

if (singleton1 === singleton2) {
  console.log("instance1 = instance2");
} else {
  console.log("instance1 != instance2");
}

if (razySingleton1 === razySingleton2) {
  console.log("razyinstance1 = razyinstance2");
} else {
  console.log("razyinstance1 != razyinstance2");
}
