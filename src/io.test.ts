import fs from 'fs';
import { readInput } from './io';

function randomFileName(): string {
  return Math.random().toString(36).substr(2, 5);
}

let fd: number;
const filePath = `/tmp/${randomFileName()}`;

beforeEach(() => {
  fd = fs.openSync(filePath, 'a+');
  fs.writeSync(fd, 'abc');
});

afterEach(() => {
  fs.closeSync(fd);
  fs.unlinkSync(filePath);
});

test('read input', () => {
  const f = fs.openSync(filePath, 'r');
  expect(readInput(f)).toEqual('abc');
});
