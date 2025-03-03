/**
 * @generated-from ./$flat.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { flat, toArray } from '../../..';
describe('flat', () => {
  it('flats iterable', () => {
    const iter = flat(1, [[1, 2], [3, 4], [5]]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5]);
  });
  it('flats iterable (default one level)', () => {
    const iter = flat([[1, 2], [3, 4], [5]]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5]);
  });
  it('flats iterable, curried', () => {
    const iter = flat(1)([[1, 2], [3, 4], [5]]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5]);
  });
  it('flats iterable, curried (default one level)', () => {
    const iter = flat([[1, 2], [3, 4], [5]]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5]);
  });
  it('flats iterable depth 0', () => {
    const iter = flat(0, [[1, 2], [3, 4], [5]]);
    expect(toArray(iter)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it('flats iterable depth 2', () => {
    const iter = flat(2, [[1, 2], [3, [4, 5]], [[6]]]);
    expect(toArray(iter)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('flats strings', () => {
    const iter = flat(2, [['a', 'b'], ['c', ['d', 'e']], [['f']]]);
    expect(toArray(iter)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });
  it('does not expand string', () => {
    const iter = flat(2, ['foo', ['bar', ['baz']]]);
    expect(toArray(iter)).toEqual(['foo', 'bar', 'baz']);
  });
  it('flats using custom function', () => {
    const iter = flat(iter => !(typeof iter === 'string' && iter.length === 1), Infinity, [
      ['a', 'b'],
      ['c', ['d', 'e']],
      [['fghi']],
    ]);
    expect(toArray(iter)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);
  });
});
