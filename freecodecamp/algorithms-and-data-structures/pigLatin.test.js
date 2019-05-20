/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */

const vowels = ["a", "e", "i", "o", "u"];

const translatePigLatin = ([head, ...tail], acc = []) => {
  if (!head) return acc.concat(["ay"]).join("");
  if (vowels.includes(head)) {
    return acc.length === 0
      ? [head]
          .concat(tail)
          .concat("way")
          .join("")
      : [head]
          .concat(tail)
          .concat(acc)
          .concat("ay")
          .join("");
  } else {
    return translatePigLatin(tail, acc.concat([head]));
  }
};

describe("translatePigLatin", () => {
  it("should return 'ay' when given an empty string", () => {
    const expected = "ay";
    const actual = translatePigLatin("");
    expect(actual).toBe(expected);
  });

  it("should return the same word with 'way' at the end if it starts with a vowel", () => {
    const expected = "eightway";
    const actual = translatePigLatin("eight");
    expect(actual).toBe(expected);
  });

  it("should translate the word if it starts with 1 consonant", () => {
    const expected = "ivegay";
    const actual = translatePigLatin("give");
    expect(actual).toBe(expected);
  });

  it("should translate the word if it starts with any number of consonants", () => {
    const expected = "oveglay";
    const actual = translatePigLatin("glove");
    expect(actual).toBe(expected);
  });

  it("should handle words without vowels", () => {
    const expected = "qwrtyay";
    const actual = translatePigLatin("qwrty");
    expect(actual).toBe(expected);
  });
});
