import { someEmpty, allEmpty, isEmpty, isArrayLike, } from "./index";

describe('someEmpty', () => {
  it('should return true if all values are empty', () => {
    expect(someEmpty([ '', '', '' ])).toBe(true);
  });

  it('should return false if all values are not empty', () => {
    expect(someEmpty([ 'a', 'b', 'c' ])).toBe(false);
  });
});

describe('allEmpty', () => {
  it('should return true if all values are empty', () => {
    expect(allEmpty([ '', '', '' ])).toBe(true);
  });

  it('should return false if all values are not empty', () => {
    expect(allEmpty([ 'a', 'b', 'c' ])).toBe(false);
  });
});

describe('isEmpty', () => {
  it('should return true if value is empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('should return true if value is null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  it('should return true if value is undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it('should return true if value is string with a space character', () => {
    expect(isEmpty(' ')).toBe(true);
  });

  it('should return true if value is string with a tab character', () => {
    expect(isEmpty('\t')).toBe(true);
  });

  it('should return false if value is not empty', () => {
    expect(isEmpty('a')).toBe(false);
  });
});

describe('isArrayLike', () => {
  it('should return true if value is an array', () => {
    expect(isArrayLike([])).toBe(true);
  });

  it('should return true if value is a string', () => {
    expect(isArrayLike('')).toBe(true);
  });

  it('should return false if value is not an array or string', () => {
    expect(isArrayLike({})).toBe(false);
  });

  it('should return false if value is null', () => {
    expect(isArrayLike(null)).toBe(false);
  })

  it('should return false if value is undefined', () => {
    expect(isArrayLike(undefined)).toBe(false);
  });
});
