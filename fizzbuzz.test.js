const fizzBuzz = require("./fizzBuzz");

test("returns an array", () => {
  expect(Array.isArray(fizzBuzz([1, 2, 3]))).toBe(true);
});

test("returns empty array if given array is empty", () => {
  expect(fizzBuzz([])).toEqual([]);
});

test("if number is divisible by both 3 and 5 it should return 'FizzBuzz", () => {
  expect(fizzBuzz([1, 15, 30, -1, 2])).toEqual([
    "1",
    "FizzBuzz",
    "FizzBuzz",
    "-1",
    "2"
  ]);
});

test("if number is divisible by 3 or contains 3 as a digit returns 'Fizz", () => {
  expect(fizzBuzz([15, -3, 12, 31])).toEqual([
    "FizzBuzz",
    "Fizz",
    "Fizz",
    "Fizz"
  ]);
});

test("if number is divisible by 5 or contains 5 as a digit returns 'Buzz", () => {
  expect(fizzBuzz([5, -5, 512])).toEqual(["Buzz", "Buzz", "Buzz"]);
});

test("does not modify given array", () => {
  let array = [1, 3, 5];
  fizzBuzz(array);
  expect(array).toEqual([1, 3, 5]);
});

test("respects rules order, if number is divisible by 3 but contains a 5, returns 'Fizz'", () => {
  expect(fizzBuzz([51])).toEqual(["Fizz"]);
});
