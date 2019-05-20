/* We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first. */

const sum = (x, y) => x + y;

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const buildRange = (x, y) => range(x < y ? x : y, x > y ? x : y, 1);

const sumAll = ([first, second]) => buildRange(first, second).reduce(sum, 0);

describe("buildRange", () => {
  it("should return an array containing both numbers only when they're successors", () => {
    const expected = [1, 2];
    const actual = buildRange(1, 2);
    expect(actual).toEqual(expected);
  });

  it("should return an array all numbers in a range between the 2 passed arguments", () => {
    const expected = [1, 2, 3, 4];
    const actual = buildRange(1, 4);
    expect(actual).toEqual(expected);
  });
});

describe("SumAll numbers in a range", () => {
  it("should return a number", () => {
    const actual = sumAll([1, 4]);
    expect(typeof actual).toBe("number");
  });

  it("should return 10 for [1, 4]", () => {
    expect(sumAll([1, 4])).toBe(10);
  });

  it("should return 10 for [4, 1]", () => {
    expect(sumAll([4, 1])).toBe(10);
  });

  it("should return 45 for [5, 10]", () => {
    expect(sumAll([5, 10])).toBe(45);
  });

  it("should return 45 for [10, 5]", () => {
    expect(sumAll([10, 5])).toBe(45);
  });
});
