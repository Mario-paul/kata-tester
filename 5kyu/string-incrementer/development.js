const Test = require("../../Test/Test.js"); // Import Test class
const test = new Test(); // Create test object from Test class

function incrementString(string) {
  console.log("");
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
  console.log("-------------------------------------------------");

  return result;
}

// describe("Tests", () => { it("test", () => {
// test.assertEquals(incrementString("foobar000"), "foobar001");
// test.assertEquals(incrementString("foo"), "foo1");
// test.assertEquals(incrementString("foobar001"), "foobar002");
// test.assertEquals(incrementString("foobar99"), "foobar100");
// test.assertEquals(incrementString("foobar099"), "foobar100");
// test.assertEquals(incrementString(""), "1");
//   });
// });

// describe()

function activate() {
  test.assertEquals(incrementString("foobar000"), "foobar011");
  test.assertEquals(incrementString("foo"), "foo1");
  test.assertEquals(incrementString("foobar001"), "foobar002");
  test.assertEquals(incrementString("foobar99"), "foobar100");
  test.assertEquals(incrementString("foobar099"), "foobar100");
  test.assertEquals(incrementString(""), "1");
}

activate();

// incrementString("foobar000")
// incrementString("foobar099")
