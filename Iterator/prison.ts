import { Aggregate } from "./aggregate";
import { Human } from "./human";
import { HumanIterator } from "./human-iterator";
import { Iterator } from "./iterator";

export class Prison implements Aggregate {
  prisoners: Human[] = [];

  iterator(): Iterator {
    return new HumanIterator(this);
  }

  addPrisoner(prisoner: Human) {
    this.prisoners.push(prisoner);
  }

  getPrisonersCount(): number {
    return this.prisoners.length;
  }

  getPrisonerAtIndex(index: number): Human | undefined {
    return this.getPrisonersCount() > index ? this.prisoners[index] : undefined;
  }
}
