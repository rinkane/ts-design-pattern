import { stringify } from "querystring";
import { Printer } from "./Printer";

export class Banner extends Printer {
  str: string;

  protected prefix(): void {
    console.log("+" + "".padStart(this.str.length, "-") + "+");
  }
  protected suffix(): void {
    console.log("+" + "".padStart(this.str.length, "-") + "+");
  }
  protected body(): void {
    console.log("|" + this.str + "|");
  }

  constructor(str: string) {
    super();
    this.str = str;
  }
}
