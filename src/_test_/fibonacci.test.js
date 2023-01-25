import { fibonacci } from "../fibonacci.js";

describe("test for fibonacci function", () => {
  it("should return the Fibonacci number", function () {
    expect(fibonacci(10)).toBe(55);
  });
  it("should return the Fibonacci number", function () {
    expect(fibonacci(1)).toBe(1);
  });
  it("should return the Fibonacci number", function () {
    expect(fibonacci(11)).toBe(89);
  });
  it("should return the Fibonacci number", function () {
    expect(fibonacci(9)).toBe(34);
  });
});

test("should return the Fibonacci number", () => {
  expect(fibonacci(15)).toBe(610);
});
