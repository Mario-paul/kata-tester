function moduleAvailable(name) {
  try {
    console.log(`Checking if module ${name} is installed...`);
    require.resolve(name);
    return true;
  } catch (e) {}
  console.log(`Module ${name} is NOT available. Please run "npm install" inside ./kata-test directory to install.`);
  return false;
}

let colorsLoaded = false;
if (moduleAvailable("colors/safe")) {
  // yeah we've got it!
  const colors = require("colors/safe");
  console.log(`colors/safe is available!`);
  colorsLoaded = true;
}

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
    console.log("colors loaded: ", colorsLoaded);
    if (input === expectedOutput) {
      // console.log("🗸 Test Passed");
      if (colorsLoaded) {
        console.log(colors.green("🗸 Test Passed"));
      } else {
        console.log("🗸 Test Passed");
      }
    } else {
      // return false
      if (colorsLoaded) {
        console.log(
          colors.red(`✗ expected ${input} to equal ${expectedOutput}`)
        );
      } else {
        console.log(`✗ expected ${input} to equal ${expectedOutput}`);
      }
      // process.exit(1) // Codewars-like behavior, exit when test fails
    }
  }
};
