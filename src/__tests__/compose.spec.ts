/**
 * @generated-from ./compose.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { compose } from '..';
describe('compose', () => {
  it('works', () => {
    const a = (str: string) => `b(${str})`;

    const b = (str: string) => `a(${str})`;

    expect(
      compose(
        b,
        a,
      )('input'),
    ).toBe('a(b(input))');
  });
  it('works with types', () => {
    expect(compose(Boolean)(0)).toBe(false);
  });
  it('is the identity function when no functions are passed', () => {
    expect(compose()(true)).toBe(true);
  });
});
