function analyzeText(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let splitStr = str.split(" ");
  let longestWord = splitStr[0];
  for (let word of splitStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  let letters = 0;
  let sentenceTrim = str.trim();
  for (let letter of sentenceTrim) {
    if (letter !== " ") {
      letters++;
    }
  }
  return {
    longwords: longestWord,
    token: letters,
  };
}
let output = analyzeText("Keep coding keep shining");
console.log(output);
