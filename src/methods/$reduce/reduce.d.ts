/**
 * @generated-from ./$reduce.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable } from '../../internal/iterable';
declare function reduce<O = any, T = any>(
  func: (acc: O, item: T, i: number) => O,
): (iterable: InputIterable<T>) => O;
declare function reduce<O = any, T = any>(
  initial: O,
  func: (acc: O, item: T, i: number) => O,
): (iterable: InputIterable<T>) => O;
declare function reduce<O = any, T = any>(
  func: (acc: O, item: T, i: number) => O,
  iterable: InputIterable<T>,
): O;
declare function reduce<O = any, T = any>(
  initial: O,
  func: (acc: O, item: T, i: number) => O,
  iterable: InputIterable<T>,
): O;
export default reduce;
