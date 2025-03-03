import { $MaybePromise } from '../../../generate/async.macro';

import { $InputIterable, $GeneratorIterator } from '../../internal/$iterable';

declare function $takeWhile<T = any>(
  func: (item: T, i: number) => $MaybePromise<boolean>,
): (iterable: $InputIterable<T>) => $GeneratorIterator<T>;

declare function $takeWhile<T = any>(
  func: (item: T, i: number) => $MaybePromise<boolean>,
  iterable: $InputIterable<T>,
): $GeneratorIterator<T>;

export default $takeWhile;
