function describe(string, func) {
  console.group()
  console.log(string)
  func();
  console.groupEnd()
}

function it(string, func) {
  console.group()
  console.log(string)
  func()
  console.groupEnd()
}

module.exports = {describe, it}
