export interface Prototype {
  use(): void;
  createClone(): Prototype;
}
