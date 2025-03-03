import { $InputIterable, $GeneratorIterator } from '../../internal/$iterable';

declare function $takeSorted<T = any>(iterable: $InputIterable<T>): $GeneratorIterator<T>;

declare function $takeSorted<T = any>(
  n: number,
): (iterable: $InputIterable<T>) => $GeneratorIterator<T>;

declare function $takeSorted<T = any>(
  func: (a: T, b: T) => number,
  n: number,
): (iterable: $InputIterable<T>) => $GeneratorIterator<T>;

declare function $takeSorted<T = any>(
  n: number,
  iterable: $InputIterable<T>,
): $GeneratorIterator<T>;

declare function $takeSorted<T = any>(
  func: (a: T, b: T) => number,
  n: number,
  iterable: $InputIterable<T>,
): $GeneratorIterator<T>;

export default $takeSorted;
