export class Matrix<T> extends Array {
  constructor(rows: number, cols: number, init: T) {
    super()
    for (let row = 0; row < rows; row++) {
      const row = [];

      for (let col = 0; col < cols; col++) {
        row.push(init);
      }

      this.push(row);
    }
  }

  public rowLength(): number {
    return this.length;
  }

  public colLength(): number {
    return this[0].length;
  }
}

export interface Position {
  row: number;
  col: number;
}
