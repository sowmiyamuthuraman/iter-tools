/**
 * @generated-from ./$enumerate.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncIterableLike, AsyncIterableIterator } from './internal/async-iterable';
declare function asyncEnumerate<T = any>(
  iterable: AsyncIterableLike<T>,
  start?: number,
): AsyncIterableIterator<[number, T]>;
export default asyncEnumerate;
