export interface Builder {
  makeTitle(title: string): void;
  makeHeader(head: string): void;
  makeBody(contents: string[]): void;
  close();
  getResult(): string;
}
