export class Singleton {
  private static singleton: Singleton = new Singleton();

  private constructor() {
    console.log("new singleton()");
  }

  public static getInstance(): Singleton {
    return this.singleton;
  }
}
