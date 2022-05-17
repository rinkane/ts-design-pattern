export class RazySingleton {
  private static singleton: RazySingleton;

  private constructor() {
    console.log("new razysingleton()");
  }

  public static getInstance() {
    if (!this.singleton) {
      this.singleton = new RazySingleton();
    }
    return this.singleton;
  }
}
