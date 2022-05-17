import { Factory } from "./factory";
import { Ice } from "./ice";
import { Product } from "./product";

export class IceFactory extends Factory {
  ices: Ice[] = [];

  createProduct(name: string) {
    return new Ice(name);
  }

  registerProduct(prod: Product) {
    this.ices.push(prod as Ice);
  }

  getIces() {
    return this.ices;
  }
}
