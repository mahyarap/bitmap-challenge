import {
  findColorPositions,
  findAdjacents,
  getManhattanDistance,
  computeMinDistanceBFS
} from './algo';
import { Color, Bitmap } from './bitmap';

const bitmap = new Bitmap(2, 2, Color.Black);

beforeEach(() => {
  for (let i = 0; i < bitmap.rowLength(); i++) {
    for (let j = 0; j < bitmap.colLength(); j++) {
      // Identity bitmap (matrix)
      if (i === j) {
        bitmap[i][j] = Color.White;
      }
    }
  }
});

test('find white positions in bitmap', () => {
  expect(findColorPositions(bitmap, Color.White)).toEqual(
    [
      {row: 0, col: 0},
      {row: 1, col: 1}
    ]
  );
});


test('find adjacents', () => {
  expect(findAdjacents(2, 2, {row: 0, col: 0})).toEqual(
    [
      {row: 0, col: 1},
      {row: 1, col: 0},
      {row: 1, col: 1}
    ]
  );
});

test('manhattan distance', () => {
  expect(getManhattanDistance({row: 0, col: 0}, {row: 1, col: 1})).toBe(2);
});

test('compute min distance', () => {
  const testCase = {rows: 2, cols: 2, bitmap: bitmap};
  expect(computeMinDistanceBFS(testCase, Color.White)).toEqual(
    [
      [Color.Black, Color.White],
      [Color.White, Color.Black]
    ]
  );
});
