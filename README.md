# Bitmap Challenge
A complete solution to the bitmap challenge written in TypeScript.

## Usage
First clone the project:
```
git clone https://github.com/mahyarap/bitmap-challenge && cd bitmap-challenge
```

Install the dependecies
```
npm install
```

Run the code by feeding it a test case
```
cat sample.txt | npm run --silent start
```

**NOTE**: The code only reads from the standard input (as mentioned in the
problem).

## Running Tests
To run the test suit
```
npm run test
```

## Architecture
This codebase is written in style of CLI applications. There is a `main`
function which drives the program. The program simply:
* Reads the standard input
* Parses the input to an array of `TestCase`s
* Solves the problem
* Writes the result to the standard output

## Main Features
To ease the reviewing of the app, in the following lines, I have highlighted
the main features of the program.

The is an `io` module which handles the reading and writing to a `file
descriptor`. `stdin` and `stdout` are not intentionally hardcoded to
demonstrate a **dependency injection** like solution to the testing. The tests
related to the `io` module read from and write to a `fd` instead of `stdin` and
`stdout`.

The `inputParser` of `parser` module also receives a `string` instead of doing
the `io` itself.

There are several abstractions such as `TestCase`, `Matrix`, `Bitmap` and
`Queue` which make the code more readable and maintainable.

The main BFS algorithm (the `algo` module) is split into several functions to
make it more readable and testable.

## Final Notes
There is no async code used since this program is highly CPU-bound the event
loop has nothing more to do except running the algorithm.

The application is not dockerized since docker is mostly suitable for services
not on-shot programs.
