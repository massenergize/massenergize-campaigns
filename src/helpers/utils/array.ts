import { isEmpty } from "./index";
import { AnyObject } from "./types";

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

/**
 *
 * @param array
 * @param labelKey
 * @param valueKey
 */
export function addLabelsAndValues<T> (array: T[], labelKey = "name", valueKey = "id"): T[] {
  return array.map((item) => {
    return {
      ...item,
      label: item[labelKey],
      value: item[valueKey]
    };
  });
}

type Comparator = (array1: Array<AnyObject>, array2: Array<Object>) => void;

interface DiffArray {
  (array1: Array<any>, array2: Array<AnyObject>, comparator : Comparator): any;
}

export const diffArray: DiffArray = function (array1, array2, comparator ) {
  return comparator(array1, array2)
}

export function hasSameValues<T> (array1: T[], array2: T[], comparator : Comparator): boolean {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((item) => {
    return array2.includes(item);
  });
}

