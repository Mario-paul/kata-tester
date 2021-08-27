/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Comment out your code on this file for future reference.

function kata() {
  // Your code here...
  return;
}

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(kata("foobar000"), "foobar001");
    Test.assertEquals(kata("foo"), "foo1");
    // Replace these Sample Tests with the ones provided by your kata!
    // Make sure to replace variable on line 3 (Test) with the class name
    // in the Sample Tests you paste here.
  });
});
