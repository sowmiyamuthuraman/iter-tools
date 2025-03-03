/**
 * @generated-from ./$is-sorted.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable } from '../../internal/async-iterable';
declare function asyncIsSorted(iterable: AsyncInputIterable<any>): boolean | Promise<boolean>;
declare function asyncIsSorted<T = any>(
  comparator: (a: T, b: T) => number,
  iterable: AsyncInputIterable<T>,
): boolean | Promise<boolean>;
export default asyncIsSorted;
