/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

const spinalCase = str => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
};

describe.only("spinalCase", () => {
  it("should return an empty string when passed an empty string", () => {
    const expected = "";
    const actual = spinalCase("");
    expect(actual).toBe(expected);
  });

  it("should work correctly on regular space separated words", () => {
    const expected = "this-is-spinal-tap";
    const actual = spinalCase("This is Spinal Tap");
    expect(actual).toBe(expected);
  });

  it("should work correctly on camelCase", () => {
    const expected = "this-is-spinal-tap";
    const actual = spinalCase("ThisIsSpinalTap");
    expect(actual).toBe(expected);
  });

  it("should work correctly on snakeCase", () => {
    const expected = "this-is-spinal-tap";
    const actual = spinalCase("this_is_spinal_tap");
    expect(actual).toBe(expected);
  });

  it("should work correctly on a mix of everything", () => {
    const expected = "this-is-spinal-tap";
    const actual = spinalCase("ThisIs_Spinal Tap");
    expect(actual).toBe(expected);
  });
});
