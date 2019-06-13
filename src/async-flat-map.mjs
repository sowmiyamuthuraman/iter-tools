/**
 * @generated-from ./$flat-map.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from './internal/async-iterable';
import map from './async-map';

async function* asyncFlatMap(func, iterable) {
  for await (const item of map(func, iterable)) {
    yield* item;
  }
}

export default asyncIterableCurry(asyncFlatMap);
