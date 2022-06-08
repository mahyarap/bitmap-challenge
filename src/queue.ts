export class Queue<T> {
  private q: T[];

  constructor(arr: T[] = []) {
    this.q = [...arr];
  }

  public enqueue(item: T): void {
    this.q.push(item);
  }

  public dequeue(): T {
    if (this.length() > 0) {
      return this.q.shift() as T;
    } else {
      throw new Error('cannot dequeue empty array');
    }
  }

  public length(): number {
    return this.q.length;
  }
}
