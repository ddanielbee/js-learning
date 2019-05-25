/*
  Given an array and the value of a sum, find if there is a pair in the array that fulfills the sum value and return that pair
*/

const sumPairs = ([head, ...tail], sumValue, complements = new Map()) => {
  if (!head) return [];

  const complement = complements.get(head);

  if (complement) return [complement, 4];

  complements.set(sumValue - head, head);

  return sumPairs(tail, sumValue, complements);
};

describe("sumPairs", () => {
  it("should return [] when no pair is found", () => {
    expect(sumPairs([1, 2, 3, 4], 16)).toEqual([]);
  });

  it("should return true when a pair is found on a sorted array", () => {
    expect(sumPairs([1, 2, 4, 4], 8)).toEqual([4, 4]);
  });

  it("should return true when a pair is found on an unsorted array", () => {
    expect(sumPairs([1, 4, 3, 1, 4, 1], 8)).toEqual([4, 4]);
  });
});
