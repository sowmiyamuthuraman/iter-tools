/**
 * @generated-from ./async-includes.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIncludes, range } from '../../..';
describe('asyncIncludes', () => {
  it('returns true if the iterable contains the given value', async () => {
    expect(await asyncIncludes(1, range(0, 10))).toBe(true);
  });
  it('returns true if the iterable contains only the given value', async () => {
    expect(await asyncIncludes(1, [1])).toBe(true);
  });
  it('returns false if the iterable does not contain the given value', async () => {
    expect(await asyncIncludes(1, [2])).toBe(false);
  });
  it('returns false if the iterable is empty', async () => {
    expect(await asyncIncludes(undefined, [])).toBe(false);
  });
});
