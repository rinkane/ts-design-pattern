import { Counter } from "./counter";
import { Series } from "./series";

export class SeriesCounterHas implements Counter {
  series: Series;

  constructor(count: number) {
    this.series = new Series(count);
  }

  countUp(): number {
    return this.series.increment();
  }
  countDown(): number {
    return this.series.decrement();
  }
}
