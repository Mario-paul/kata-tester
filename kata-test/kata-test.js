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
        if (input === undefined || input === null) {
          if (info) {
            console.log(
              colors.red(
                `✗ ${info}: expected ${input} to equal '${expectedOutput}'`
              )
            );
          } else {
            console.log(
              colors.red(`✗ expected ${input} to equal '${expectedOutput}'`)
            );
          }
        } else {
          if (info) {
            console.log(
              colors.red(
                `✗ ${info}: expected '${input}' to equal '${expectedOutput}'`
              )
            );
          } else {
            console.log(
              colors.red(`✗ expected '${input}' to equal '${expectedOutput}'`)
            );
          }
        }
      } else {
        if (input === undefined || input === null) {
          if (info) {
            console.log(
              `✗ ${info}: expected ${input} to equal '${expectedOutput}'`
            );
          } else {
            console.log(`✗ expected ${input} to equal '${expectedOutput}'`);
          }
        } else {
          if (info) {
            console.log(
              `✗ ${info}: expected '${input}' to equal '${expectedOutput}'`
            );
          } else {
            console.log(`✗ expected '${input}' to equal '${expectedOutput}'`);
          }
        }
      }
      console.log(spacerFailed);
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
