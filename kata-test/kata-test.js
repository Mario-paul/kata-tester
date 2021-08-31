function moduleAvailable(name) {
  try {
    // console.log(`Checking if module '${name}' is installed...`);
    // console.log(require.resolve(name)); // debug require.resolve()
    require.resolve(name);
    return true;
  } catch (e) {}
  console.log(
    `Checking if module '${name}' is installed... Module '${name}' was NOT found. Please run "npm install" inside 'kata-test/' directory to install.`
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
  // console.log(`Checking if module 'colors' is installed... 'colors' is installed!`);
  // console.log(``);
  colorsLoaded = true;
}

module.exports = class KataTest {
  testLogic(input, expectedOutput, info) {
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    const passedSpacer = "--------------";
    const failedSpacer = "---------------------------------------------";
    const testPassed = "🗸 Test Passed";

    let myInput = `'${input}'`;
    let myExpectedOutput = `'${expectedOutput}'`;
    if (input === undefined || input === null || !isNaN(input)) {
      myInput = input;
    }
    if (!isNaN(expectedOutput)) {
      myExpectedOutput = `${expectedOutput}`;
    }
    let testFailed = `✗ expected ${myInput} to equal ${myExpectedOutput}`;
    let testFailedInfo = `✗ ${info}: expected ${myInput} to equal ${myExpectedOutput}`;

    if (input === expectedOutput) {
      // return true
      if (colorsLoaded) {
        console.log(colors.green(testPassed));
      } else {
        console.log(testPassed);
      }
      console.log(passedSpacer);
    } else {
      // return false
      if (colorsLoaded) {
        if (info) {
          console.log(colors.red(testFailedInfo));
        } else {
          console.log(colors.red(testFailed));
        }
      } else {
        if (info) {
          console.log(testFailedInfo);
        } else {
          console.log(testFailed);
        }
      }
      console.log(failedSpacer);
      // process.exit(1) // Codewars-like behavior, exit when a test fails
    }
  }

  assertEquals(input, expectedOutput, info) {
    this.testLogic(input, expectedOutput, info);
  }

  equal(input, expectedOutput, info) {
    this.testLogic(input, expectedOutput, info);
  }
};
