module.exports = class Test {
  assertEquals(input, expectedOutput) {
    if (input === expectedOutput) {
      // return true
      console.log("TEST PASSED")
    } else {
      // return false
      console.log(`Expected ${input} to equal ${expectedOutput}`)
    }
  }
};
