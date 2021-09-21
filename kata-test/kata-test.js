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
  deepEqualLogic = (input, expectedOutput) => {
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
    return keys.every((k) => this.deepEqualLogic(input[k], expectedOutput[k]));
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
    message,
    testPassed,
    testFailed,
    testFailedMessage
  ) {
    // console.log("colors loaded: ", colorsLoaded); //debug colors module
    const passedSpacer = "--------------";
    const failedSpacer = "---------------------------------------------";

    // Comparing two identical arrays gives FALSE. Hence, deepEqualLogic function
    // console.log(this.deepEqualLogic(input, expectedOutput)) // Debug deepEqualLogic
    if (this.deepEqualLogic(input, expectedOutput)) {
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
        if (message) {
          console.log(colors.red(testFailedMessage));
        } else {
          console.log(colors.red(testFailed));
        }
      } else {
        if (message) {
          console.log(testFailedMessage);
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

  testSuite(input, expectedOutput, message, testType) {
    let printInput = this.checkForArray(input);
    let printExpectedOutput = this.checkForArray(expectedOutput);

    let testPassed, testFailed, testFailedMessage;

    if (testType === "default") {
      printInput = this.removeSingleQuotes(input);
      printExpectedOutput = this.removeSingleQuotes(expectedOutput);

      testPassed = "🗸 Test Passed";
      testFailed = `✗ expected ${printInput} to equal ${printExpectedOutput}`;
      testFailedMessage = `✗ ${message}: expected ${printInput} to equal ${printExpectedOutput}`;
    } else if (testType === "assertSimilar") {
      testPassed = `🗸 Test Passed: Value == ${printExpectedOutput}`;
      testFailed = `✗ Expected: ${printExpectedOutput}, instead got: ${printInput}`;
      testFailedMessage = `✗ ${message} - Expected: ${printExpectedOutput}, instead got: ${printInput}`;
    } else if (testType === "deepEqual") {
      printInput = this.removeSingleQuotes(input);
      // printExpectedOutput = this.removeSingleQuotes(expectedOutput);

      testPassed = "🗸 Test Passed";
      testFailed = `✗ expected ${printInput} to deeply equal ${printExpectedOutput}`;
      testFailedMessage = `✗ ${message}: expected ${printInput} to deeply equal ${printExpectedOutput}`;
    }

    this.printTestResult(
      input,
      expectedOutput,
      message,
      testPassed,
      testFailed,
      testFailedMessage
    );
  }

  assertEquals(input, expectedOutput, message) {
    const test = "default";
    this.testSuite(input, expectedOutput, message, test);
  }

  equal(input, expectedOutput, message) {
    const test = "default";
    this.testSuite(input, expectedOutput, message, test);
  }

  assertSimilar(input, expectedOutput, message) {
    const test = "assertSimilar";
    this.testSuite(input, expectedOutput, message, test);
  }

  deepEqual(input, expectedOutput, message) {
    const test = "deepEqual";
    this.testSuite(input, expectedOutput, message, test);
  }
};
