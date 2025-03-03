import { $MaybePromise } from '../../../generate/async.macro';

import { $InputIterable, $GeneratorIterator } from '../../internal/$iterable';

declare function $flatMap<O, T = any>(
  func: (item: T) => $MaybePromise<$InputIterable<O>>,
): (iter: $InputIterable<T>) => $GeneratorIterator<O>;

declare function $flatMap<O, T = any>(
  func: (item: T) => $MaybePromise<$InputIterable<O>>,
  iter: $InputIterable<T>,
): $GeneratorIterator<O>;

export default $flatMap;
