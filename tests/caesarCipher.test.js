import caesarCipher from "./caesarCipher";

describe("Caesar Cipher", () => {
  test("Letter a", () => {
    expect(caesarCipher("a", 1)).toBe("b");
  });
  test("hello", () => {
    expect(caesarCipher("hello", 1)).toBe("ifmmp");
  });
  test("z to b wrap", () => {
    expect(caesarCipher("z", 2)).toBe("b");
  });
  test("Same case", () => {
    expect(caesarCipher("Love you", 2)).toBe("Nqxg aqw");
  });
  test("Same case 2", () => {
    expect(caesarCipher("FANS ARE OK", 2)).toBe("HCPU CTG QM");
  });
  test("Punctuation", () => {
    expect(caesarCipher("Hello, world. WORD", 3)).toBe("Khoor, zruog. ZRUG");
  });
});
