import { Matrix } from './matrix';

export class Bitmap extends Matrix<Color> {
  constructor(rows: number, cols: number, color: Color = Color.Black) {
    super(rows, cols, color);
  }
}

export enum Color {
  Black = 0,
  White = 1
}
