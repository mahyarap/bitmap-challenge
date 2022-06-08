import { readInput, writeOutput } from './io';
import { parseInput } from './parser';
import { computeMinDistanceBFS } from './algo';
import { Color } from './bitmap';

function main(): void {
  try {
    const rawInput = readInput(process.stdin.fd);
    const testCases = parseInput(rawInput);

    testCases.forEach((testCase) => {
      const result = computeMinDistanceBFS(testCase, Color.White);
      writeOutput(result, process.stdout.fd);
    });
  } catch (error) {
    let message = 'Unknown Error';
    if (error instanceof Error) {
      message = error.message;
    }
    console.error(`Error: ${message}`);
    process.exit(1);
  }
}

main();
