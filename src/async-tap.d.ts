/**
 * @generated-from ./$tap.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import {
  AsyncIterableLike,
  AsyncIterableIterator,
  AsyncMaybePromise,
} from './internal/async-iterable';
declare function asyncTap<T = any>(
  func: (item: T, i: number) => AsyncMaybePromise<any>,
): (iterable: AsyncIterableLike<T>) => AsyncIterableIterator<T>;
declare function asyncTap<T = any>(
  func: (item: T, i: number) => AsyncMaybePromise<any>,
  iterable: AsyncIterableLike<T>,
): AsyncIterableIterator<T>;
export default asyncTap;
