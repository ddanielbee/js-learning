/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5. */

const sumFibs = num => {
  if (num <= 1) return 1;
  const accFib = [1, 1];
  let nextFib = 0;
  while ((nextFib = accFib[0] + accFib[1]) <= num) {
    accFib.unshift(nextFib);
  }
  return accFib.filter(num => num % 2 === 1).reduce((acc, cur) => acc + cur, 0);
};

describe("sumFibs", () => {
  it("should return 1 when called with 0 as an argument", () => {
    expect(sumFibs(0)).toBe(1);
  });

  it("should return 1 when called with 1 as an argument", () => {
    expect(sumFibs(1)).toBe(1);
  });

  it("should return 5 when called with 4 as an argument", () => {
    expect(sumFibs(4)).toBe(5);
  });

  it("should return 10 when called with 10 as an argument", () => {
    expect(sumFibs(10)).toBe(10);
  });
});
