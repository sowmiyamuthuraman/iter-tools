/**
 * @generated-from ./$size.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncSourceIterable } from '../../internal/async-iterable';
declare function asyncSize<Iter extends AsyncSourceIterable<any>>(
  iterable: Iter,
): Promise<Iter extends any[] ? Iter['length'] : number>;
export default asyncSize;
