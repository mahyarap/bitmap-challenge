import { parseInput } from './parser';

test('parser valid input', () => {
  const input = '1\n2 2\n00\n11\n';
  expect(parseInput(input)).toEqual([
    {
      rows: 2,
      cols: 2,
      bitmap: [
        [0, 0],
        [1, 1]
      ]
    }
  ])
});

test('invalid number of test cases', () => {
  const input = '2000\n2 2\n00\n11\n';
  expect(() => parseInput(input)).toThrow(/test case/);
});

test('invalid number of rows', () => {
  const input = '1\n200 2\n00\n11\n';
  expect(() => parseInput(input)).toThrow(/row/);
});

test('invalid number of cols', () => {
  const input = '1\n2 200\n00\n11\n';
  expect(() => parseInput(input)).toThrow(/col/);
});
