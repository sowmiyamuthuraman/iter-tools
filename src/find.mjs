/**
 * @generated-from ./$find.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { iterableCurry } from './internal/iterable';

function find(func, iterable) {
  let c = 0;

  for (const item of iterable) {
    if (func(item, c++)) {
      return item;
    }
  }

  return undefined;
}

export default iterableCurry(find, {
  reduces: true,
});
