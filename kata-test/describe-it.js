function describe(string, func) {
  console.log("Test Results:");
  // console.log("");

  console.group();
  console.log(string);
  func();
  console.groupEnd();
}

function it(string, func) {
  console.group();
  console.log(string);
  console.log("--------------")
  func();
  console.groupEnd();
}

module.exports = { describe, it };
