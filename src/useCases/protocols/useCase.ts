export abstract class UseCase<T> {
  public abstract execute(...args: any): Promise<T>;
}