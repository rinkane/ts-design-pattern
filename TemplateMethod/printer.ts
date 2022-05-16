export abstract class Printer {
  protected abstract prefix(): void;
  protected abstract suffix(): void;
  protected abstract body(): void;

  public print() {
    this.prefix();
    for (let i = 0; i < 3; i++) {
      this.body();
    }
    this.suffix();
  }
}
