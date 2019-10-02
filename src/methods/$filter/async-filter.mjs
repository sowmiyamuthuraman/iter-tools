/**
 * @generated-from ./$filter.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
export async function* asyncFilter(source, func) {
  let c = 0;

  for await (const item of source) {
    if (await func(item, c++)) {
      yield item;
    }
  }
}
export default asyncIterableCurry(asyncFilter);
