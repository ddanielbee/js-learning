/* Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after). */

const isUpperCase = char => char === char.toUpperCase();

const identicalCase = ([head1, ..._], [head2, ...tail2]) =>
  isUpperCase(head1)
    ? `${head2.toUpperCase()}${tail2.join("")}`
    : `${head2.toLowerCase()}${tail2.join("")}`;

const myReplace = (str, before, after) => {
  return str.replace(before, identicalCase(before, after));
};

describe("myReplace", () => {
  it("should return an empty string when first argument is empty", () => {
    const expected = "";
    const actual = myReplace("", "doesnt matter", "again");
    expect(actual).toBe(expected);
  });

  it("should replace a one word string with another", () => {
    const expected = "goodbye";
    const actual = myReplace("hello", "hello", "goodbye");
    expect(actual).toBe(expected);
  });
  it("should replace casing correctly", () => {
    const expected = "He is Sitting on the couch";
    const actual = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
    expect(actual).toBe(expected);
  });
});
