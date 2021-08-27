/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

function incrementString(string) {
  // console.log("");
  console.log("string:", string);
  if (string === "") return "1";

  var num = string;
  const regex = new RegExp("(\\d+)", "gi");
  let regMatch = num.match(regex);
  if (regMatch === null) return string + 1;

  console.log("regMatch:", regMatch);
  const matchLength = regMatch[0].length;
  console.log("regMatch.length:", matchLength);

  // let test = "0".repeat(matchLength) + (++regMatch)
  // console.log(test.substr(-matchLength-1))

  let allNines = "9".repeat(matchLength);
  if (regMatch[0] === allNines) {
    console.log(`regMatch is ${allNines}`);
    var result = num.replace(regex, (match) => {
      return ("0".repeat(matchLength) + ++match).substr(-matchLength - 1);
    });
  } else {
    console.log(`regMatch is not ${allNines}`);
    var result = num.replace(regex, (match) => {
      return ("0".repeat(matchLength) + ++match).substr(-matchLength);
    });
  }

  console.log("result:", result);
  console.log("--------------");

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
