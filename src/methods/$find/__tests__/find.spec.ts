/**
 * @generated-from ./$find.spec.ts
 * This file is autogenerated from a template. Please do not edit it directly.
 * To rebuild it from its template use the command
 * > npm run generate
 * More information can be found in CONTRIBUTING.md
 */

import assert from 'static-type-assert';
import { Iterable } from '../../../internal/iterable';
import { find } from '../../..';
declare const Ø: never;
assert<number | undefined>(find(Ø as (item: number) => any, Ø as Iterable<number>));
assert<2 | undefined>(find(Ø as (item: number) => item is 2, Ø as Iterable<number>));
