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
  // Deep comparison between two values to determine if they are equivalent.
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

  // If value is an array, return string formatted with brackets
  checkForArray = (value) => {
    let printValue;
    if (Array.isArray(value)) {
      printValue = "[[" + value.join("], [") + "]]";
      return `'${printValue}'`;
    } else {
      return `'${value}'`;
    }
  };

  printTestResult(
    input,
    expectedOutput,
    info,
    testPassed,
    testFailed,
    testFailedInfo
  ) {
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    const passedSpacer = "--------------";
    const failedSpacer = "---------------------------------------------";

    // Comparing two identical arrays gives FALSE. Hence, deepEqual function
    // console.log(this.deepEqual(input, expectedOutput)) // Debug deepEqual
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

  // Remove single quotes if input is undefined, null, or if it's a number
  removeSingleQuotes(value) {
    if (value === undefined || value === null || !isNaN(value)) {
      return value;
    }
  }

  defaultTest(input, expectedOutput, info) {
    let printInput = this.checkForArray(input);
    let printExpectedOutput = this.checkForArray(expectedOutput);

    printInput = this.removeSingleQuotes(input);
    printExpectedOutput = this.removeSingleQuotes(expectedOutput);

    const testPassed = "🗸 Test Passed";
    const testFailed = `✗ expected ${printInput} to equal ${printExpectedOutput}`;
    const testFailedInfo = `✗ ${info}: expected ${printInput} to equal ${printExpectedOutput}`;

    this.printTestResult(
      input,
      expectedOutput,
      info,
      testPassed,
      testFailed,
      testFailedInfo
    );
  }

  assertEquals(input, expectedOutput, info) {
    this.defaultTest(input, expectedOutput, info);
  }

  equal(input, expectedOutput, info) {
    this.defaultTest(input, expectedOutput, info);
  }

  assertSimilar(input, expectedOutput, info) {
    let printInput = this.checkForArray(input);
    let printExpectedOutput = this.checkForArray(expectedOutput);

    const testPassed = `🗸 Test Passed: Value == ${printExpectedOutput}`;
    const testFailed = `✗ Expected: ${printExpectedOutput}, instead got: ${printInput}`;
    const testFailedInfo = `✗ ${info} - Expected: ${printExpectedOutput}, instead got: ${printInput}`;

    this.printTestResult(
      input,
      expectedOutput,
      info,
      testPassed,
      testFailed,
      testFailedInfo
    );
  }
};
