/* Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order. */

const uniteUnique = (...arr) =>
  arr.reduce((acc, cur) => acc.concat(cur.filter(char => !acc.includes(char))), []);

describe("uniteUnique", () => {
  it("should return an empty array when all arguments are empty arrays", () => {
    const expected = [];
    const actual = uniteUnique([]);
    expect(actual).toEqual(expected);
  });

  it("should return the first array that contains anything if all other arguments are empty arrays", () => {
    const expected = [1, 2, 3];
    const actual = uniteUnique([], [1, 2, 3], [], []);
    expect(actual).toEqual(expected);
  });

  it("should return the first array if all other arguments are exactly the same", () => {
    const expected = [1, 2, 3];
    const actual = uniteUnique([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]);
    expect(actual).toEqual(expected);
  });

  it("should concatenate unique elements of the argument arrays", () => {
    const expected = [1, 2, 3, 5, 4, 6, 7, 8];
    const actual = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
    expect(actual).toEqual(expected);
  });
});
