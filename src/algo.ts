import { TestCase } from './parser';
import { Bitmap, Color } from './bitmap';
import { Queue } from './queue';
import { Matrix, Position } from './matrix';

/**
 * Calculates the Manhatan distance between two matrix posisions
 */
export function getManhattanDistance(p1: Position, p2: Position): number {
  const rowDist = Math.abs(p1.row - p2.row);
  const colDist = Math.abs(p1.col - p2.col);
  return rowDist + colDist;
}

export function findColorPositions(bitmap: Bitmap, color: Color): Position[] {
  const positions = [];

  for (let row = 0; row < bitmap.rowLength(); row++) {
    for (let col = 0; col < bitmap.colLength(); col++) {
      if (bitmap[row][col] === color) {
        positions.push({ row, col });
      }
    }
  }

  return positions;
}

/**
 * Finds adjacents to `pos`
 */
export function findAdjacents(rows: number, cols: number, pos: Position): Position[] {
  const adjacents = [];

  for (let row = pos.row - 1; row <= pos.row + 1; row++) {
    for (let col = pos.col - 1; col <= pos.col + 1; col++) {
      const validRow = row >= 0 && row < rows;
      const validCol = col >= 0 && col < cols;
      const isSelf = row === pos.row && col === pos.col;

      if (validRow && validCol && !isSelf) {
        adjacents.push({ row, col });
      }
    }
  }

  return adjacents;
}

/**
 * Computes the minimum distance matrix for each `testCase` with given `color`
 *
 * It uses Breadth-first search algorithm for matrices.
 */
export function computeMinDistanceBFS(testCase: TestCase, color: Color): Matrix<Color> {
  const { rows, cols, bitmap } = testCase;
  const result = new Matrix(rows, cols, Number.MAX_SAFE_INTEGER);
  const positions = findColorPositions(bitmap, color);

  for (const { row, col } of positions) {
    result[row][col] = 0;
  }

  const queue = new Queue<Position>(positions);
  while (queue.length() > 0) {
    const position = queue.dequeue();
    const adjacents = findAdjacents(rows, cols, position);

    for (const adjacent of adjacents) {
      const manDist = getManhattanDistance(position, adjacent);
      const newDistance = result[position.row][position.col] + manDist;
      if (newDistance < result[adjacent.row][adjacent.col]) {
        result[adjacent.row][adjacent.col] = newDistance;
        queue.enqueue(adjacent);
      }
    }
  }

  return result;
}
