import { Printer } from "./Printer";

export class OneLiner extends Printer {
  str: string;

  protected prefix(): void {
    process.stdout.write("#");
  }
  protected suffix(): void {
    console.log("#");
  }
  protected body(): void {
    process.stdout.write(this.str);
  }

  constructor(str: string) {
    super();
    this.str = str;
  }
}
