import { Product } from "./product";

export class Ice extends Product {
  taste: string;

  constructor(taste: string) {
    super();
    this.taste = taste;
  }

  use() {
    console.log(`あなたは${this.taste}味のアイスを食べた！心地良い冷たさが体に行き渡る…HPが回復した！`);
  }
}
