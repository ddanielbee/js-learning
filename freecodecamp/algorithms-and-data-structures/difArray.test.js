/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

In other words, return the symmetric difference of the two arrays. */

const diffArrays = () => [];

describe.only("diffArrays", () => {
  it("should return an empty array for identical arrays", () => {
    const expected = [];
    const actual = diffArrays([1, 2, 3], [1, 2, 3]);
    expect(actual).toEqual(expected);
  });
});
