/*
  Given an array of meeting objects {name, lengthInHours} and a number of hours to fill, return a list that contains
  the meetings that fill the most possible time
*/

const optimizeSchedule = () => [];

const buildPermutations = (list, permutations = new Map()) => {
  if (list.length === 0) return permutations;

  for (let i = 0; i < list.length; i++) {
    const currentPermutation = buildPermutation(list.slice(0, i + 1));
    if (!permutations.get(currentPermutation[0]))
      permutations.set(currentPermutation[0], currentPermutation[1]);
  }
  return buildPermutations(list.slice(1), permutations);
};

const buildPermutation = arr => [arr.reduce((acc, cur) => acc + cur.lengthInHours, 0), arr];

const testData = [
  {
    name: "testMeeting",
    lengthInHours: 1
  },
  {
    name: "testMeeting",
    lengthInHours: 2
  }
];

describe("optimizeSchedule", () => {
  it("should return an empty array when given no meetings", () => {
    expect(optimizeSchedule([], 8)).toEqual([]);
  });

  it("should return an empty array when all given meetings have a higher length than the available hours", () => {
    expect(optimizeSchedule([{ name: "x", lengthInHours: 9 }], 8)).toEqual([]);
  });
});

describe("buildPermutations", () => {
  it("should return an empty map when given an empty array", () => {
    expect(buildPermutations([])).toEqual(new Map());
  });

  it("should return a map of number of hours to a list of meetings that sum to that number", () => {
    const expected = new Map([
      [1, [testData[0]]],
      [3, [testData[0], testData[1]]],
      [2, [testData[1]]]
    ]);
    const actual = buildPermutations(testData);
    expect(actual).toEqual(expected);
  });
});
