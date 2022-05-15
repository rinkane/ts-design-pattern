import { SeriesCounterEx } from "./series-counter-extends";
import { SeriesCounterHas } from "./series-counter-has";

const counterEx = new SeriesCounterEx(10);
const counterHas = new SeriesCounterHas(0);

for (let i = 0; i < 10; i++) console.log(counterEx.countDown());
for (let i = 0; i < 3; i++) console.log(counterHas.countUp());
