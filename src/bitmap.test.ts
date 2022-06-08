import { Bitmap, Color } from './bitmap';

test('init bitmap', () => {
  const bitmap = new Bitmap(1, 2, Color.Black);
  expect(bitmap).toEqual([[Color.Black, Color.Black]]);
});

test('dimentions', () => {
  const bitmap = new Bitmap(1, 2, Color.Black);
  expect(bitmap.rowLength()).toBe(1);
});
