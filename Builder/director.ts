import { Builder } from "./builder";

export class Director {
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }

  public construct() {
    this.builder.makeHeader("Header");
    this.builder.makeTitle("Title1");
    this.builder.makeBody(["Body1", "Body2"]);
    this.builder.makeTitle("Title2");
    this.builder.makeBody(["Body1", "Body2", "Body3"]);
    this.builder.close();
  }
}
