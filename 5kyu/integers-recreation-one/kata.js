/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */

// Development file. Test your code here! Use Quokka Pro or Code Runner
// to execute code live on this IDE.

function listSquared(m, n) {
  // your code
  return ([[42, 2500], [246, 84100]])
  // return null
}

describe("Basic tests",function() {
  Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]], "test message")
  Test.assertSimilar(listSquared(42, 250), [[42, 2500], [246, 84100]])
  Test.assertSimilar(listSquared(250, 500), [[287, 84100]])  
  })
