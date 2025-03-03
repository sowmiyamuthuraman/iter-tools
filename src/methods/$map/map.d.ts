/**
 * @generated-from ./$map.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { InputIterable, GeneratorIterator } from '../../internal/iterable';
declare function map<O, T = any>(
  func: (item: T) => O,
): (iterable: InputIterable<T>) => GeneratorIterator<O>;
declare function map<O, T = any>(
  func: (item: T) => O,
  iterable: InputIterable<T>,
): GeneratorIterator<O>;
export default map;
