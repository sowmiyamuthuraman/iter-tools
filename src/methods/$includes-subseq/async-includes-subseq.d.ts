/**
 * @generated-from ./$includes-subseq.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { AsyncInputIterable } from '../../internal/async-iterable';
declare function asyncIncludesSubseq(
  subseq: AsyncInputIterable<any>,
): (iterable: AsyncInputIterable<any>) => Promise<boolean>;
declare function asyncIncludesSubseq(
  subseq: AsyncInputIterable<any>,
  iterable: AsyncInputIterable<any>,
): Promise<boolean>;
export default asyncIncludesSubseq;
