import { Banner } from "./banner";
import { OneLiner } from "./one-liner";
import { Printer } from "./Printer";

const printer1: Printer = new OneLiner("One");
const printer2: Printer = new Banner("I was the one.");
const printer3: Printer = new Banner("Take me to the hospital");
printer1.print();
printer2.print();
printer3.print();
