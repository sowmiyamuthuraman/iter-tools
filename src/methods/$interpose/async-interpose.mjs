/**
 * @generated-from ./$interpose.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
export async function* asyncInterpose(source, interposeItem) {
  let first = true;

  for await (const item of source) {
    if (!first) {
      yield interposeItem;
    }

    yield item;
    first = false;
  }
}
export default asyncIterableCurry(asyncInterpose);
