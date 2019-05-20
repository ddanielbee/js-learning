/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

const strToAsciiCodes = str => [...str].map(char => char.charCodeAt(0));

const fearNotLetter = str => {
  const ascii = strToAsciiCodes(str);
  let result = undefined;
  ascii.forEach((code, index) => {
    if (index === ascii.length - 1) return;
    if (ascii[index + 1] - code > 1) {
      result = String.fromCharCode(code + 1);
    }
  });
  return result;
};

describe("fearNotLetter", () => {
  it("should return undefined if there are no missing alphabet letters in range", () => {
    const expected = undefined;
    const actual = fearNotLetter("");
    expect(actual).toEqual(expected);
  });

  it("should return b for a range of ac", () => {
    const expected = "b";
    const actual = fearNotLetter("ac");
    expect(actual).toBe(expected);
  });

  it("should return i for the range abcdefghjklmno", () => {
    const expected = "i";
    const actual = fearNotLetter("abcdefghjklmno");
    expect(actual).toBe(expected);
  });
});
