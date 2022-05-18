import { Prototype } from "./prototype";

export class Nail implements Prototype {
  material: string;

  use(): void {
    console.log(`${this.material}製の釘です。`);
  }
  createClone(): Prototype {
    return new Nail(this.material);
  }

  constructor(material: string) {
    this.material = material;
  }
}
