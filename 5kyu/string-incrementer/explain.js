/***********************************************************************/
const Test = require("../../kata-test/kata-test.js");                  //
const test = new Test();                                               //
const { describe, it } = require("../../kata-test/describe-it.js");    //
/***********************************************************************/
/* Environment setup. Do not modify the above code.                    */

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
    test.assertEquals(incrementString("foobar000"), "foobar001");
    test.assertEquals(incrementString("foo"), "foo1");
    test.assertEquals(incrementString("foobar001"), "foobar002");
    test.assertEquals(incrementString("foobar99"), "foobar100");
    test.assertEquals(incrementString("foobar099"), "foobar100");
    test.assertEquals(incrementString(""), "1");
  });
});
