/**
 * @generated-from ./$concat.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncIterableLike, AsyncIterableIterator } from './internal/async-iterable';
declare function asyncConcat<T = any>(
  ...iterables: Array<AsyncIterableLike<T>>
): AsyncIterableIterator<T>;
export default asyncConcat;
