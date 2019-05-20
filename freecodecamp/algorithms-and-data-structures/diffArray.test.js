/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 

In other words, return the symmetric difference of the two arrays. */

const arrayIntersection = (firstArray, secondArray) => {
  return firstArray.reduce((acc, cur) => {
    if (!secondArray.includes(cur)) {
      return acc.concat([cur]);
    }
    return acc;
  }, []);
};

const diffArray = (firstArray, secondArray) => {
  return arrayIntersection(firstArray, secondArray).concat(
    arrayIntersection(secondArray, firstArray)
  );
};

describe.only("diffArrays", () => {
  it("should return an empty array for identical arrays", () => {
    const expected = [];
    const actual = diffArray([1, 2, 3], [1, 2, 3]);
    expect(actual).toEqual(expected);
  });
  it("should return [4]", () => {
    const expected = [4];
    const actual = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    expect(actual).toEqual(expected);
  });
});
