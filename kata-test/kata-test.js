module.exports = class Test {
  assertEquals(input, expectedOutput) {
    if (input === expectedOutput) {
      // return true
      console.log("🗸 Test Passed");
    } else {
      // return false
      console.log(`✗ expected ${input} to equal ${expectedOutput}`);
    }
  }

  equal(input, expectedOutput) {
    if (input === expectedOutput) {
      // return true
      console.log("🗸 Test Passed");
    } else {
      // return false
      console.log(`✗ expected ${input} to equal ${expectedOutput}`);
    }
  }
};
