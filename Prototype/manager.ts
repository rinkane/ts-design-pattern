import { Prototype } from "./prototype";

export class Manager {
  map: Map<string, Prototype> = new Map<string, Prototype>();

  register(name: string, product: Prototype) {
    this.map.set(name, product);
  }

  create(name: string): Prototype {
    return this.map.get(name).createClone();
  }
}
