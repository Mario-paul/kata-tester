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
  deepEqual = (input, expectedOutput) => {
    if (input === expectedOutput) return true;
    if (input instanceof Date && expectedOutput instanceof Date)
      return input.getTime() === expectedOutput.getTime();
    if (
      !input ||
      !expectedOutput ||
      (typeof input !== "object" && typeof expectedOutput !== "object")
    )
      return input === expectedOutput;
    if (input.prototype !== expectedOutput.prototype) return false;
    let keys = Object.keys(input);
    if (keys.length !== Object.keys(expectedOutput).length) return false;
    return keys.every((k) => this.deepEqual(input[k], expectedOutput[k]));
  };

  testLogic(input, expectedOutput, info) {
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    const passedSpacer = "--------------";
    const failedSpacer = "---------------------------------------------";
    const testPassed = "🗸 Test Passed";

    let myInput = `'${input}'`;
    let myExpectedOutput = `'${expectedOutput}'`;
    // Probably delete the following two lines
    // let myExpectedOutput = JSON.stringify(expectedOutput);
    // myExpectedOutput = `'${myExpectedOutput}'`;
    if (input === undefined || input === null || !isNaN(input)) {
      myInput = input;
    }
    if (!isNaN(expectedOutput)) {
      myExpectedOutput = `${expectedOutput}`;
    }
    let testFailed = `✗ expected ${myInput} to equal ${myExpectedOutput}`;
    let testFailedInfo = `✗ ${info}: expected ${myInput} to equal ${myExpectedOutput}`;

    if (this.deepEqual(input, expectedOutput)) {
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

  assertSimilar(input, expectedOutput, info) {
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    const passedSpacer = "--------------";
    const failedSpacer = "---------------------------------------------";

    let myInput = "[[" + input.join("], [") + "]]";
    myInput = `'${myInput}'`;
    let myExpectedOutput = "[[" + expectedOutput.join("], [") + "]]";
    myExpectedOutput = `'${myExpectedOutput}'`;
    // Check if input is undefined, null, or NaN, remove single quotes if true
    // if (input === undefined || input === null || !isNaN(input)) {
    //   myInput = input;
    // }
    // Check if expectedOutput is a number, remove single quotes if true
    // if (!isNaN(expectedOutput)) {
    //   myExpectedOutput = `${expectedOutput}`;
    // }
    const testPassed = `🗸 Test Passed: Value == ${myExpectedOutput}`;
    let testFailed = `✗ Expected: ${myExpectedOutput}, instead got: ${myInput}`;
    let testFailedInfo = `✗ ${info} - Expected: ${myExpectedOutput}, instead got: ${myInput}`;

    // Comparing two identical arrays gives FALSE. Hence, deepEqual function
    // console.log(deepEqual(input, expectedOutput)) // Debug deepEqual
    if (this.deepEqual(input, expectedOutput)) {
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
};
