/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

const entitiesMap = new Map([
  ["<", "&lt;"],
  ["&", "&amp;"],
  [">", "&gt;"],
  ['"', "&quot;"],
  ["'", "&apos;"]
]);

const getEntity = char => {
  const charEntity = entitiesMap.get(char);
  return charEntity ? charEntity : char;
};

const convertHTML = str => [...str].map(char => getEntity(char)).join("");

describe("convertHTML", () => {
  it("should return an empty string when passed one", () => {
    const expected = "";
    const actual = convertHTML("");
    expect(actual).toBe(expected);
  });

  it("should correctly convert entities", () => {
    const expected = "Stuff in &quot;quotation marks&quot;";
    const actual = convertHTML('Stuff in "quotation marks"');
    expect(actual).toBe(expected);
  });
});
