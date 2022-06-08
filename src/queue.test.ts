import { Queue } from './queue'

test('init empty queue', () => {
  const q = new Queue();
  expect(q.length()).toBe(0);
})

test('init queue with array', () => {
  const q = new Queue([1, 2]);
  expect(q.length()).toBe(2);
})

test('enqueue', () => {
  const q = new Queue([1, 2]);
  q.enqueue(3);
  expect(q.length()).toBe(3);
})

test('dequeue', () => {
  const q = new Queue([1, 2]);
  const item = q.dequeue();
  expect(q.length()).toBe(1);
  expect(item).toBe(1);
})

test('dequeue empty queue', () => {
  const q = new Queue();
  expect(() => q.dequeue()).toThrow(/empty array/);
})
