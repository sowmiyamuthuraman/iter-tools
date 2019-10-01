/**
 * @generated-from ./join.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { join, toArray } from '../../..';
describe('join', () => {
  it('should join each group with the provided value', () => {
    expect(toArray(join([[1], [2], [3]]))).toEqual([1, 2, 3]);
  });
  it('should have two adjacent separators when encountering an empty group', () => {
    expect(toArray(join([[1], [], [3]]))).toEqual([1, 3]);
  });
  it('should yield a single separator when joining two empty groups', () => {
    expect(toArray(join([[], []]))).toEqual([]);
  });
  it('passes through the empty iterable', () => {
    expect(toArray(join(null))).toEqual([]);
  });
  it('passes through the empty string', () => {
    expect(toArray(join(''))).toEqual([]);
  });
  describe('given a string', () => {
    it('should split on every item which is equal to the on argument', () => {
      expect(toArray(join(['11', '22', '33']))).toEqual(['1', '1', '2', '2', '3', '3']);
    });
  });
});
