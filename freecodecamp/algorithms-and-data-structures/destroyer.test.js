/* You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 

Remove all elements from the initial array that are of the same value as these arguments. */

const destroyer = (...args) => {
  if (args.length === 1) return args[0];
  return destroyer(args[0].filter(x => x !== args[1]), ...args.slice(2));
};

describe("destroyer", () => {
  it("should return an empty array if initial array is empty", () => {
    const expected = [];
    const actual = destroyer([], 1, 2, 3, 4);
    expect(actual).toEqual(expected);
  });

  it("should return the same initial array if none of the other arguments are present", () => {
    const expected = [1, 2, 3];
    const actual = destroyer([1, 2, 3], 4, 5, 6);
    expect(actual).toEqual(expected);
  });

  it("should return an empty array if all values in the array are present in the other arguments", () => {
    const expected = [];
    const actual = destroyer([1, 2], 1, 2);
    expect(actual).toEqual(expected);
  });
});
