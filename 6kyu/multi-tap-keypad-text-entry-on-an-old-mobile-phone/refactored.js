/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Refactored kata. One liners are ideal, though not necessary.
// Test your code here! Use Quokka Pro or Code Runner to execute code
// live on this IDE.

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
