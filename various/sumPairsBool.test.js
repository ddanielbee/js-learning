/*
  Given an array and the value of a sum, find if there is a pair in the array that fulfills the sum value
*/

const sumPairs = ([head, ...tail], sumValue, complements = new Map()) => {
  if (!head) return false;

  if (complements.get(head)) return true;

  complements.set(sumValue - head, head);

  return sumPairs(tail, sumValue, complements);
};

describe("sumPairs", () => {
  it("should return false when no pair is found", () => {
    expect(sumPairs([1, 2, 3, 4], 16)).toBe(false);
  });

  it("should return true when a pair is found on a sorted array", () => {
    expect(sumPairs([1, 2, 4, 4], 8)).toBe(true);
  });

  it("should return true when a pair is found on an unsorted array", () => {
    expect(sumPairs([1, 4, 3, 1, 4, 1], 8)).toBe(true);
  });
});
