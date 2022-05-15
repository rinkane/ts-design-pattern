import { Iterator } from "./iterator";
import { Prison } from "./prison";

export class HumanIterator implements Iterator {
  prison: Prison;
  index: number = 0;

  constructor(prison: Prison) {
    this.prison = prison;
  }

  hasNext(): boolean {
    return this.prison.getPrisonersCount() > this.index;
  }

  next(): Object {
    const prisoner = this.prison.getPrisonerAtIndex(this.index);
    this.index++;
    return prisoner;
  }
}
