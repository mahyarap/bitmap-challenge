import { Bitmap, Color } from './bitmap';

export interface TestCase {
  rows: number;
  cols: number;
  bitmap: Bitmap;
}

export function parseInput(input: string): TestCase[] {
  const lines = input.split('\n').filter((line) => line !== '');
  const testCasesCount = toNumber(lines[0]);
  if (testCasesCount < 1 || testCasesCount > 1000) {
    throw new Error(`test cases count not in 1 <= t <= 100: ${testCasesCount}`);
  }
  const testCases: TestCase[] = [];

  let lineIndex = 1;
  for (let i = 0; i < testCasesCount; i++) {
    const [rows, cols] = lines[lineIndex].split(' ').map(toNumber);
    if (rows < 1 || rows > 182) {
      throw new Error(`rows count not in 1 <= r <= 182: ${rows}`);
    } else if (cols < 1 || cols > 182) {
      throw new Error(`cols count not in 1 <= c <= 182: ${cols}`);
    }
    lineIndex += 1;

    const arr = [];
    for (let j = 0; j < rows; j++) {
      const row = lines[lineIndex].split('').map(toNumber);
      arr.push(row);
      lineIndex += 1;
    }

    const bitmap = new Bitmap(rows, cols);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        switch (arr[i][j]) {
          case Color.White:
            bitmap[i][j] = Color.White;
            break;
          case Color.Black:
            bitmap[i][j] = Color.Black;
            break;
          default:
            throw new Error(`not a valid color: ${arr[i][j]}`);
        }
      }
    }

    testCases.push({ rows, cols, bitmap });
  }
  return testCases;
}

function toNumber(str: string): number {
  return parseInt(str, 10);
}
