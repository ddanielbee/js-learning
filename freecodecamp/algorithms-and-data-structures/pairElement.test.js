/* The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. */

const dnaPairings = new Map([["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]);

const pairSingle = single => [single, dnaPairings.get(single)];

const pairElement = str => [...str].map(single => pairSingle(single));

describe("pairElement", () => {
  it("should return an empty Array when passed an empty string", () => {
    const expected = [];
    const actual = pairElement("");
    expect(actual).toEqual(expected);
  });

  it("should return a single pairing", () => {
    const expected = [["A", "T"]];
    const actual = pairElement("A");
    expect(actual).toEqual(expected);
  });

  it("should return a complex pairing", () => {
    const expected = [["C", "G"], ["T", "A"], ["C", "G"], ["T", "A"], ["A", "T"]];
    const actual = pairElement("CTCTA");
    expect(actual).toEqual(expected);
  });
});
