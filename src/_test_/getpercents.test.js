import {getPercents} from "../getpercents.js";

describe("test for getPrimes function", () => {
  it('case 5 should return 2, 3, 5', function () {
    expect(getPercents(37, 200)).toBe(74)
  });
  it('case 4 should return 2, 3', function () {
    expect(getPercents(10,200)).toBe(20)
  });
  it('case 4 should return 2, 3', function () {
    expect(getPercents(10,200)).not.toBe(55)
  });
  it('case 4 should return 2, 3', function () {
    expect(getPercents(10,200)).not.toBe(1)
  });
})


