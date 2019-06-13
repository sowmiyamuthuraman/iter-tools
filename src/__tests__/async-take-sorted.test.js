/**
 * @generated-from ./$take-sorted.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { asyncTakeSorted, asyncToArray } from '..';
describe('asyncTakeSorted', () => {
  it('return smallest iterable', async () => {
    const smallest3 = asyncTakeSorted(3, [99, 12, 4, 6, 97, 44, 66, 77, 98]);
    expect(await asyncToArray(smallest3)).toEqual([97, 98, 99]);
    const smallest1 = asyncTakeSorted(1, [99, 12, 4, 6, 97, 44, 66, 77, 98]);
    expect(await asyncToArray(smallest1)).toEqual([99]);
  });
  it('return smallest iterable, using comparator', async () => {
    const smallest2 = asyncTakeSorted((a, b) => a.length - b.length, 2, [
      'abc',
      'a',
      'abcd',
      'abcd',
      'abcdef',
      'ab',
    ]);
    expect(await asyncToArray(smallest2)).toEqual(['abcd', 'abcdef']);
  });
  it('return smallest iterable, using curry', async () => {
    const smallest3 = asyncTakeSorted(3)([99, 12, 4, 6, 97, 44, 66, 77, 98]);
    expect(await asyncToArray(smallest3)).toEqual([97, 98, 99]);
  });
});
