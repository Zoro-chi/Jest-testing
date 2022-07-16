const caesarCipher = (str, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  const string = str.toLowerCase();

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      const index = alphabet.indexOf(string[i]);
      result += alphabet[(index + key) % 26];
    } else {
      result += " ";
    }
  }
  return result;
};

export default caesarCipher;
