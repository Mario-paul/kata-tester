// Version to be submitted to Codewars

function incrementString(string) {
  if (string === "") return "1";

  var num = string;
  const regex = new RegExp("(\\d+)", "gi");
  let regMatch = num.match(regex);
  if (regMatch === null) return string + 1;

  const matchLength = regMatch[0].length;
  let allNines = "9".repeat(matchLength);

  if (regMatch[0] === allNines) {
    var result = num.replace(regex, (match) => {
      return ("0".repeat(matchLength) + ++match).substr(-matchLength - 1);
    });
  } else {
    var result = num.replace(regex, (match) => {
      return ("0".repeat(matchLength) + ++match).substr(-matchLength);
    });
  }

  return result;
}
