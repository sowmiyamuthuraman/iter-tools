/**
 * @generated-from ./call.test.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { call } from '..';
describe('call', () => {
  it('calls the passed function', () => {
    const testFn = jest.fn();
    call(testFn);
    expect(testFn).toHaveBeenCalledTimes(1);
    expect(testFn).toHaveBeenLastCalledWith();
    call(testFn);
    expect(testFn).toHaveBeenCalledTimes(2);
  });
  it('passes the function the extra arguments provided to it', () => {
    const testFn = jest.fn();
    call(testFn, 2, 3);
    expect(testFn).toHaveBeenCalledTimes(1);
    expect(testFn).toHaveBeenLastCalledWith(2, 3);
  });
});
