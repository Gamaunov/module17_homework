import { getPercents } from "../getpercents.js";

describe("test for getPrimes function", () => {
  it("case 37, 200 should return 74", function () {
    expect(getPercents(37, 200)).toBe(74);
  });
  it("case 10, 200 should return 20", function () {
    expect(getPercents(10, 200)).toBe(20);
  });
  it("case 10, 200 should not to  be 55", function () {
    expect(getPercents(10, 200)).not.toBe(55);
  });
  it("case 10, 200 should not to  be 1", function () {
    expect(getPercents(10, 200)).not.toBe(1);
  });
});

test("have all the same properties", () => {
  expect(getPercents(30, 1.3)).toEqual(0.39);
});
test("are not the exact same can", () => {
  expect(getPercents(22, 856)).not.toBe(5);
});
