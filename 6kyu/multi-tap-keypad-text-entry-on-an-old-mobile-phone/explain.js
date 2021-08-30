/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Comment out your code on this file for future reference.

function presses(phrase) {
  // Your code here...
  return;
}

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(presses("LOL"), 9, "should work for simple examples")
Test.assertEquals(presses("HOW R U"), 13, "should work for phrases with spaces")
  });
});
