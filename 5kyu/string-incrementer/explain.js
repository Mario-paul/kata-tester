const Test = require("../../Test/Test.js"); // Import Test class
const test = new Test(); // Create test object from Test class

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

// incrementString("foobar000");
// incrementString("foobar099");

function activate() {
  test.assertEquals(incrementString("foobar000"), "foobar011");
  test.assertEquals(incrementString("foo"), "foo1");
  test.assertEquals(incrementString("foobar001"), "foobar002");
  test.assertEquals(incrementString("foobar99"), "foobar100");
  test.assertEquals(incrementString("foobar099"), "foobar100");
  test.assertEquals(incrementString(""), "1");
}

activate();
