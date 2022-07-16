import caesarCipher from "./caesarCipher";

describe("Caesar Cipher", () => {
  test("Letter a", () => {
    expect(caesarCipher("a", 1)).toBe("b");
  });
  test("hello", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
  });
  test("Letter z", () => {
    expect(caesarCipher("z", 2)).toBe("b");
  });
  test("Same case", () => {
    expect(caesarCipher("Love you", 2)).toBe("Nqxg aqw");
  });
});
