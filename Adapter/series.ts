export class Series {
  count: number;

  constructor(count: number) {
    this.count = count;
  }

  increment() {
    this.count++;
    return this.count;
  }

  decrement() {
    this.count--;
    return this.count;
  }
}
