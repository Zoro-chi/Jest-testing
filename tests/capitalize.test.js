import capitalize from "./capitalize";

test("Capitalize first word", () => {
  expect(capitalize("hello")).toBe("Hello");
});
