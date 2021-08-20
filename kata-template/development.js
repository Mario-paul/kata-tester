/***********************************************************************/
const Test = require("../../kata-test/kata-test.js");                  //
const test = new Test();                                               //
const { describe, it } = require("../../kata-test/describe-it.js");    //
/***********************************************************************/
/* Environment setup. Do not modify the above code.                    */

// Development file. Test your code here! Use Quokka Pro or Code Runner
// to execute code live on this IDE.

function kata() {
  // Your code here...
  return
}

describe("Tests", () => {
  it("test", () => {
    test.assertEquals(kata("foobar000"), "foobar001");
    test.assertEquals(kata("foo"), "foo1");
    // Replace these Sample Tests with the ones provided by your kata!
    // Make sure to replace Test.assertEquals with test.assertEquals
  });
});
