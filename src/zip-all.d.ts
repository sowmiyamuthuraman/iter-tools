/**
 * @generated-from ./$zip-all.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { IterableLike, IterableIterator } from './internal/iterable';
declare function zipAll<T = any>(
  ...iterables: Array<IterableLike<T>>
): IterableIterator<Array<T | undefined>>;
export default zipAll;
