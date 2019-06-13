/**
 * @generated-from ./$drop-while.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { IterableLike, IterableIterator, MaybePromise } from './internal/iterable';
declare function dropWhile<T = any>(
  func: (item: T, i: number) => MaybePromise<boolean>,
): (iterable: IterableLike<T>) => IterableIterator<T>;
declare function dropWhile<T = any>(
  func: (item: T, i: number) => MaybePromise<boolean>,
  iterable: IterableLike<T>,
): IterableIterator<T>;
export default dropWhile;
