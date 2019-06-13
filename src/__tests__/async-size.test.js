/**
 * @generated-from ./$size.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars */

import { asyncSize, range } from '..';
describe('asyncSize', () => {
  it('return length of array', async () => {
    expect(await asyncSize([1, 2, 3, 4, 5, 6])).toBe(6);
  });
  it('returns 0 for null or undefined', async () => {
    expect(await asyncSize(null)).toBe(0);
    expect(await asyncSize(undefined)).toBe(0);
  });
  it('returns the size of a map', async () => {
    expect(await asyncSize(new Map([[1, 1], [2, 2]]))).toBe(2);
  });
  it('return number of items in iterable', async () => {
    expect(
      await asyncSize(
        range({
          start: 1,
          end: 7,
        }),
      ),
    ).toBe(6);
  });
});
