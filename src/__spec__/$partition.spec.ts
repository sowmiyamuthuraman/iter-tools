import assert from 'static-type-assert';

import { $Iterable, $IterableIterator, $Promise } from  '../internal/$iterable';
import { $partition } from '..';

declare var Ø: never;

assert<[$IterableIterator<number>, $IterableIterator<string | boolean>]>(
  $partition(
    Ø as (item: string | number | boolean) => item is number,
    Ø as $Iterable<string | number | boolean>,
  ),
);

assert<
  (
    iter: Iterable<string | number | boolean>,
  ) => [$IterableIterator<number>, $IterableIterator<string | boolean>]
>(
  $partition(
    Ø as (item: string | number | boolean) => item is number,
  ),
);

assert<[$IterableIterator<number>, $IterableIterator<number>]>(
  $partition(Ø as (item: number) => $Promise<boolean>, Ø as Iterable<number>),
);

assert<
  (
    iter: Iterable<number>,
  ) => [$IterableIterator<number>, $IterableIterator<number>]
>($partition(Ø as (item: number) => $Promise<boolean>));
