/**
 * @generated-from ./$execute.d.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import { GeneratorIterator } from '../../internal/iterable';
declare function execute<T, Args extends any[] = any[]>(
  func: (...args: Args) => T,
  ...args: Args
): GeneratorIterator<T>;
export default execute;
