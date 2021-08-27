/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

function incrementString(string) {
  if (string === "") return "1";

  // Find number in string and isolate it
  var num = string;
  const regex = new RegExp("(\\d+)", "gi");
  let regMatch = num.match(regex);
  if (regMatch === null) return string + 1;

  const matchLength = regMatch[0].length;
  let allNines = "9".repeat(matchLength);

  // If all digits are 9, substring removes one digit of padding of zeroes,
  // eg. 099 => 100 instead of 099 => 0100
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

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(incrementString("foobar000"), "foobar001");
    Test.assertEquals(incrementString("foo"), "foo1");
    Test.assertEquals(incrementString("foobar001"), "foobar002");
    Test.assertEquals(incrementString("foobar99"), "foobar100");
    Test.assertEquals(incrementString("foobar099"), "foobar100");
    Test.assertEquals(incrementString(""), "1");
  });
});
