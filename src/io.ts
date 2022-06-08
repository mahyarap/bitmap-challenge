import fs from 'fs';
import tty from 'tty';
import { Matrix } from './matrix';

export function readInput(fd: number): string {
  if (tty.isatty(fd)) {
    throw new Error(
      `Error: fd ${fd} is a tty, Can only work when fd is not a tty.\n`
      + `Hint: try piping`
    );
  }

  try {
    return fs.readFileSync(fd, { encoding: 'utf8' });
  } catch (error) {
    throw new Error(`could not read from fd ${fd}, ${error}`);
  }
}

export function writeOutput(matrix: Matrix<number>, fd: number) {
  try {
    for (let i = 0; i < matrix.rowLength(); i++) {
      fs.writeFileSync(fd, matrix[i].join(' '));
      fs.writeFileSync(fd, '\n');
    }
    fs.writeFileSync(fd, '\n');

  } catch (error) {
    throw new Error(`could not write to fd ${fd}, ${error}`);
  }
}
