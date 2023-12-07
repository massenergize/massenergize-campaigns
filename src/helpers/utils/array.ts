import { isEmpty } from "./index";

interface BinarySearch {
  (array: number[], target: number): number;
}

/**
 * Binary search
 * @param array {Array} - sorted array
 * @param target {number}
 * @returns {number}
 */
export const binarySearch: BinarySearch = function (array, target) {
  if (!Array.isArray(array)) {
    throw new Error("Argument: array must be of type Array");
  }

  if (array.length === 0) {
    return -1;
  }

  if (typeof target !== "number") {
    throw new Error("Argument: target must be of type number");
  }

  if (target < array[0] || target > array[array.length - 1]) {
    return -1;
  }


  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor(end / 2);

  while (array[middle] !== target && start < end) {
    if (target < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return (array[middle] !== target) ? -1 : middle;
}

/**
 * Check if an array has empty values; i.e. null, undefined, empty string, empty object, empty array
 * @param array
 */
export function someEmpty<T> (array: T[]): boolean {
  return array.some((item) => {
    return isEmpty(item);
  });
}

