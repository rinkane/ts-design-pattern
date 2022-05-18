import { Prototype } from "./prototype";

export class Hammer implements Prototype {
  count: number;

  use(): void {
    for (let i = 0; i < this.count; i++) {
      console.log("SMAAAAASH!");
    }
  }

  createClone(): Prototype {
    return new Hammer(this.count);
  }

  constructor(count: number) {
    this.count = count;
  }
}
