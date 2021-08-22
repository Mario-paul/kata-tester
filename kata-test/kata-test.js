function moduleAvailable(name) {
  try {
    console.log(`Checking if module '${name}' is installed...`);
    // console.log(require.resolve(name)); // debug require.resolve()
    require.resolve(name);
    return true;
  } catch (e) {}
  console.log(
    `Module '${name}' was NOT found. Please run "npm install" or "npm install colors" inside ./kata-test directory to install.`
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
  console.log(`'colors' is installed!`);
  console.log(``);
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
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    if (input === expectedOutput) {
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
      // process.exit(1) // Codewars-like behavior, exit when a test fails
    }
  }
};
