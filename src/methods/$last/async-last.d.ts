/**
 * @generated-from ./$last.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable } from '../../internal/async-iterable';
declare function asyncLast<T = any>(iterable: AsyncInputIterable<T>): Promise<T | undefined>;
export default asyncLast;
