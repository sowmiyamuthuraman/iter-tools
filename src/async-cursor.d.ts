/**
 * @generated-from ./$cursor.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { Repeat8 } from './internal/types/utility';
import { AsyncIterableLike, AsyncIterableIterator } from './internal/async-iterable';
declare function asyncCursor<Size extends number, Filler = undefined, T = any>(
  opts: {
    readonly size: Size;
    readonly trailing?: boolean;
    readonly filler?: Filler;
  },
  iterable: AsyncIterableLike<T>,
): AsyncIterableIterator<Repeat8<T | Filler, Size>>;
export default asyncCursor;
