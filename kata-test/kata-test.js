function moduleAvailable(name) {
  try {
    // console.log(`Checking if module '${name}' is installed...`);
    // console.log(require.resolve(name)); // debug require.resolve()
    require.resolve(name);
    return true;
  } catch (e) {}
  console.log(
    `Checking if module '${name}' is installed... Module '${name}' was NOT found. Please run "npm install" inside ./kata-test directory to install.`
  );
  console.log("");
  return false;
}

let colors;
let colorsLoaded = false;

if (moduleAvailable("colors")) {
  // yeah we've got it!
  colors = require("colors/safe");
  // let colors = require("colors/safe")
  console.log(`Checking if module 'colors' is installed... 'colors' is installed!`);
  console.log(``);
  colorsLoaded = true;
}

module.exports = class Test {
  testLogic(input, expectedOutput) {
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    const spacerPassed = "--------------";
    const spacerFailed = "---------------------------------------------";
    if (input === expectedOutput) {
      // return true
      if (colorsLoaded) {
        console.log(colors.green("🗸 Test Passed"));
      } else {
        console.log("🗸 Test Passed");
      }
      console.log(spacerPassed);
    } else {
      // return false
      if (colorsLoaded) {
        console.log(
          colors.red(`✗ expected ${input} to equal ${expectedOutput}`)
        );
      } else {
        console.log(`✗ expected ${input} to equal ${expectedOutput}`);
      }
      console.log(spacerFailed);
      // process.exit(1) // Codewars-like behavior, exit when a test fails
    }
  }

  assertEquals(input, expectedOutput) {
    this.testLogic(input, expectedOutput);
  }

  equal(input, expectedOutput) {
    this.testLogic(input, expectedOutput);
  }
};
