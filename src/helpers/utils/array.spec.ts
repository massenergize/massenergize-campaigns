import {binarySearch} from "./array";

describe("binarySearch", () => {
  it("should return the index of the target", () => {

    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  it("should return -1 if the target is not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 if the target is less than the first element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 0)).toBe(-1);
  });

  it("should return -1 if the target is greater than the last element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  it("should return -1 if the array is empty", () => {
    expect(binarySearch([], 6)).toBe(-1);
  });

  it("should throw an error if the array is not an array", () => {
    expect(() => binarySearch(1, 6)).toThrow();
  });

  it("should throw an error if the target is not a number", () => {
    expect(() => binarySearch([1, 2, 3, 4, 5], "6")).toThrow();
  })
});
