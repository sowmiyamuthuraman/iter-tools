/**
 * @generated-from ./$consume.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable } from '../../internal/async-iterable';
declare function asyncConsume<T = any>(
  func: (item: T, i: number) => void,
): (iterable: AsyncInputIterable<T>) => Promise<void>;
declare function asyncConsume<T = any>(
  func: (item: T, i: number) => void,
  iterable: AsyncInputIterable<T>,
): Promise<void>;
export default asyncConsume;
