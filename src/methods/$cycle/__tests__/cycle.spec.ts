/**
 * @generated-from ./$cycle.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { GeneratorIterator } from '../../../internal/iterable';
import { cycle } from '../../..';
declare const Ø: never;
assert<GeneratorIterator<0 | 1 | 2>>(cycle(Ø as [0, 1, 2]));
assert<
  GeneratorIterator<never> | GeneratorIterator<0 | 1> | GeneratorIterator<string | number | boolean>
>(cycle(Ø as [] | [0, 1] | [string, number, boolean]));
assert<GeneratorIterator<string | number | boolean>>(
  cycle(Ø as [] | [0, 1] | [string, number, boolean]),
);
assert<GeneratorIterator<string>>(cycle(Ø as string));
assert<GeneratorIterator<0 | 1 | 2>>(cycle(Ø as Set<0 | 1 | 2>));
