import { Builder } from "./builder";

export class TextBuilder implements Builder {
  text: string = "";
  makeTitle(title: string): void {
    this.text += `・${title}\r\n`;
  }
  makeHeader(head: string): void {
    this.text += `--- ${head} ---\r\n`;
  }
  makeBody(contents: string[]): void {
    contents.map((c) => {
      this.text += `${c}\r\n`;
    });
  }
  close() {
    this.text += "------------";
  }
  getResult() {
    return this.text;
  }
}
