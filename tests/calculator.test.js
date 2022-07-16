import calculator from "./calculator";

test("Calculate 4 + 2", () => {
  expect(calculator.add(4, 2)).toBe(6);
});

test("Calculate 100 - 50", () => {
  expect(calculator.subtract(100, 50)).toBe(50);
});

test("Calculate 10 x 10", () => {
  expect(calculator.multiply(10, 10)).toBe(100);
});

test("Calculate 80 / 4", () => {
  expect(calculator.divide(80, 4)).toBe(20);
});
