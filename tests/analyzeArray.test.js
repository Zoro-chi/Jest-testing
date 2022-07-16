import analyzeArray from "./analyzeArray";

describe("Analyze array", () => {
  test("[1, 2, 3]", () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
      average: 2,
      length: 3,
      max: 3,
      min: 1,
    });
  });
  test("[10, 10, 10]", () => {
    expect(analyzeArray([10, 10, 10])).toEqual({
      average: 10,
      length: 3,
      max: 10,
      min: 10,
    });
  });
});
