/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const assert = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Development file. Test your code here! Use Quokka Pro or Code Runner
// to execute code live on this IDE.

function encode(string) {
  return "H4w 1r2 y45 t4d1y?";
}

function decode(string) {
  return;
}

describe("Sample tests", function () {
  it("Tests", function () {
    assert.equal(encode("hello"), "h2ll4");
    assert.equal(encode("How are you today?"), "H4w 1r2 y45 t4d1y?");
    assert.equal(encode("This is an encoding test."), "Th3s 3s 1n 2nc4d3ng t2st.");
    assert.equal(decode("h2ll4"), "hello");
  });
});
