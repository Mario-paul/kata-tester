function describe(string, func) {
  func();
}

function it(string, func) {
  func()
}

module.exports = {describe, it}
