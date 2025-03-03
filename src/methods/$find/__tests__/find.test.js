/**
 * @generated-from ./$find.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

/* eslint-disable no-unused-vars,import/no-duplicates */

import { find } from '../../..';
describe('find', () => {
  it('returns found item', () => {
    expect(find(item => item === 5, [1, 2, 3, 4, 5, 6])).toBe(5);
  });
  it('returns undefined if no item found', () => {
    expect(find(_ => false, [1, 2, 3, 4, 5, 6])).toBe(undefined);
  });
  it('returns undefined when iterable is empty', () => {
    expect(find(item => item, null)).toBe(undefined);
  });
});
