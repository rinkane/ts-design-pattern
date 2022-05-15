import { Counter } from "./counter";
import { Series } from "./series";

export class SeriesCounterEx extends Series implements Counter {
  constructor(series: number) {
    super(series);
  }

  countUp(): number {
    return super.increment();
  }
  countDown(): number {
    return super.decrement();
  }
}
