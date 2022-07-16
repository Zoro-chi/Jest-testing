const caesarCipher = (str, key) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const aplhabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      const index = alphabet.indexOf(str[i]);
      const indexUpper = aplhabetUpper.indexOf(str[i]);
      if (isUpperCase(str[i])) {
        result += aplhabetUpper[(indexUpper + key) % 26];
      } else if (isLowerCase(str[i])) {
        result += alphabet[(index + key) % 26];
      } else if (str[i] === "," || "." || "?" || "!") {
        result += str[i];
      }
    } else {
      result += " ";
    }
  }
  return result;
};

const isUpperCase = (char) => {
  if (char == char.toUpperCase() && char != char.toLowerCase()) {
    return true;
  }
  return false;
};

const isLowerCase = (char) => {
  if (char == char.toLowerCase() && char != char.toUpperCase()) {
    return true;
  }
  return false;
};

export default caesarCipher;
