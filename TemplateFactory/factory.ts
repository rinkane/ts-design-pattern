import { Product } from "./product";

export abstract class Factory {
  protected abstract createProduct(name: string);
  protected abstract registerProduct(prod: Product);

  create(name: string): Product {
    const prod = this.createProduct(name);
    this.registerProduct(prod);
    return prod;
  }
}
