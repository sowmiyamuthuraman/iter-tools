/**
 * @generated-from ./async-compress.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncCompress, asyncToArray, range } from '../../..';
describe('asyncCompress', () => {
  it('compress iterables', async () => {
    const iter = asyncCompress(range(10), [false, true, false, true, true]);
    expect(await asyncToArray(iter)).toEqual([1, 3, 4]);
  });
});
