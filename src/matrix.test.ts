import { Matrix } from './matrix'

describe('init matrix', () => {
  test('empty', () => {
    const matrix = new Matrix(0, 0, 0);
    expect(matrix).toEqual([]);
  })

  test('none empty with 0', () => {
    const matrix = new Matrix(1, 2, 0);
    expect(matrix).toEqual([[0, 0]]);
  })

  test('none empty with 3', () => {
    const matrix = new Matrix(1, 2, 3);
    expect(matrix).toEqual([[3, 3]]);
  })
});

test('dimentions', () => {
  const matrix = new Matrix(1, 2, 3);
  expect(matrix.rowLength()).toBe(1);
  expect(matrix.colLength()).toBe(2);
});
