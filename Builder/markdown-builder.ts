import { Builder } from "./builder";

export class MarkdownBuilder implements Builder {
  markdown: string = "";
  makeTitle(title: string): void {
    this.markdown += `- ${title}\r\n`;
  }
  makeHeader(header: string): void {
    this.markdown += `# ${header}\r\n\r\n`;
  }
  makeBody(contents: string[]): void {
    contents.map((c) => {
      this.markdown += `  - ${c}\r\n`;
    });
    this.markdown += "\r\n";
  }
  close() {}
  getResult(): string {
    return this.markdown;
  }
}
