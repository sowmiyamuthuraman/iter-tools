/**
 * @generated-from ./$find.js
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { asyncIterableCurry } from '../../internal/async-iterable';
import { asyncFindOr } from '../$find-or/async-find-or';
export function asyncFind(iterable, func) {
  return asyncFindOr(iterable, undefined, func);
}
export default asyncIterableCurry(asyncFind, {
  reduces: true,
});
