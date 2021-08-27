# kata-test -- Codewars unit test library for VSCode (Javascript)

This library was custom made by myself for localized unit tests on VSCode or any other compatible IDE, and was written in and for Javascript (Node.js) functions. When imported correctly to your kata, runnig a code runner (like Code Runner or Quokka Pro) will enable you to test your solutions just like on the Codewars IDE, just locally.

Code Runner will need to manually run the code with `ctrl + alt + n` each time, while Quokka Pro (Wallaby.js) will run code automatically in real time. Quokka free WILL NOT work, as it does not permit importing modules to your file.

The kata-template file has a working boilerplate for new katas. Simply duplicate the directory and rename the file(s) to suit your new kata. Then work on the development.js file. The following is just for info.

## Importing to your kata

There are two ways to import to your kata, the old way, and the ES6 way.

### CommonJS

The old way seems like the superior way to import at a first glance. It does not require specifying module extension, and it does not require a package.json with a `type: module`. See old vs ES6 for more info.

The environment setup for importing the module should be as follows:

```js
/***********************************************************************/
const KataTest = require("../../kata-test/kata-test.js");
const Test = new KataTest();
const { describe, it } = require("../../kata-test/describe-it.js");
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */
```

### ES6 import

Importing the KataTest library in ES6 format is currently not supported. Please do it the CommonJS way using require() method, like the kata-template boilerplates show.

The new way of importing seems worse to me in every way. It will throw an error if you don't specify the extension of the module, and it will also throw an error if you don't have a package.json with the following in it:

```json
{
  "type": "module"
}
```

The environment setup for importing the module is also different, as so:

```js
/***********************************************************************/
import KataTest from "../../kata-test/kata-test.js";
const Test = new KataTest();
import { describe, it } from "../../kata-test/describe-it.js";
/***********************************************************************/
/* Environment setup. Modify only as needed.                           */
```

## Running tests

The boilerplate has a sample code that runs the tests, but you should copy the code in the "Sample Tests" section of the Codewars browser IDE, and paste it in your .js file.

The code looks like this:

```js
describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(incrementString("foobar000"), "foobar001");
    Test.assertEquals(incrementString("foo"), "foo1");
    Test.assertEquals(incrementString("foobar001"), "foobar002");
    Test.assertEquals(incrementString("foobar99"), "foobar100");
    Test.assertEquals(incrementString("foobar099"), "foobar100");
    Test.assertEquals(incrementString(""), "1");
  });
});
```

_note the lower letter `test` class._

A poor-mans version of these tests I made early in development was the following code. It works fine, but lacks several of the features of kata-test. A feature of this function is that it works with Quokka free edition.

```js
function activate() {
  Test.assertEquals(incrementString("foobar000"), "foobar011");
  Test.assertEquals(incrementString("foo"), "foo1");
  Test.assertEquals(incrementString("foobar001"), "foobar002");
  Test.assertEquals(incrementString("foobar99"), "foobar100");
  Test.assertEquals(incrementString("foobar099"), "foobar100");
  Test.assertEquals(incrementString(""), "1");
}

activate();
```

## Colored output

Currently, VSCode OUTPUT cannot be colored easily, if at all. To get colored output, you need to go to your VSCode settings, search Code Runner, and set "code-runner.runInTerminal" to true (or check mark).

## Old vs ES6

> When you have 'type: module' in the package.json file, your source code should use `import syntax`. When you do not have, you should use `require syntax`.
>
> Adding 'type': 'module' to the package.json enables ES 6 modules. For more info, see [here](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling).
>
> -[Afshar Mohebi](https://stackoverflow.com/questions/61401475/why-is-type-module-in-package-json-file)

As mentioned earlier, import syntax is not supported at the moment. Always use require syntax, until we figure something out (or not).
