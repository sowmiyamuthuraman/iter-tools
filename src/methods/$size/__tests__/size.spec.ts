/**
 * @generated-from ./$size.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { size } from '../../..';
declare const Ø: never;
assert<4>(size(Ø as [0, 1, 2, 3]));
assert<0 | 1 | 2>(size(Ø as [] | [number] | [number, number]));
assert<number>(size(Ø as Array<number>));
assert<number>(size(Ø as string));
