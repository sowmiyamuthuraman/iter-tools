/**
 * @generated-from ./$reverse.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable, AsyncGeneratorIterator } from '../../internal/async-iterable';
declare function asyncReverse<T = any>(iterable: AsyncInputIterable<T>): AsyncGeneratorIterator<T>;
export default asyncReverse;
