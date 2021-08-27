# Kata Tester

Kata Tester is a unit testing library for Codewars katas in Visual Studio Code. With it, users can test their code within the comfort of VSCode and test their output instantly, without the usual latency of Codewars tests within the browser environment. It can also be used as a repository to save your katas online for future reference, and for easy, local access.

Kata Tester is currently written in and for katas in javascript (node.js) language. Support for other languages is definitely a possibility, but community support is needed for that (or as the dev learns the languages :P).

OLD => This is my personal repo for past Codewars katas. It also serves as a testing environment for new katas using my own custom-made unit testing library.

## Installation

The first step is to fork the repository. For this, click the fork button at the top right corner of this repo, and select where you want to fork it (personal account or organization). Alternatively, you can clone the project on your computer, create a new empty repository on Github, set it as the remote origin for your local clone, and then set this repository as upstream so you can pull updates.

### Dependencies

The testing environment needs a few dependencies to work correctly.

1. Go to your VSCode, and on the extensions tab search for ['Code Runner'](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner). Click install, and restart VSCode if it asks you.
2. If you wish to get colored output, open the integrated terminal, and cd into the kata-test directory. Then, run the following command:

    ```zsh
    npm i
    ```

    This will install the `colors` NPM module. If you do not want colored output, skip steps 2 and 3.
3. By default, `Code Runner` outputs code in the 'OUTPUT' tab. If you installed 'colors' module on step 2, you need to tell Code Runner to use the 'TERMINAL' tab instead. For this, go to File => Preferences => Settings. Search for `code-runner.runInTerminal`, and activate the setting.

## Usage

Included in the repo are two example katas that show how to setup yours. Additionally, there is a kata-template directory with boilerplate files that you can copy and paste into the kyu folder of your kata.

To use Kata Tester, we need to copy the code in the `Sample Tests:` window in the Codewars browser IDE, and paste at the end of the relevant development.js file. Lastly, edit the `environment setup` section at the top of the file. If it is different, please change the variable name on line 3 to match the class name in the sample test you just copied before. Lastly, if the method of that class is not in the kata-test.js library file, please open an issue in the upstream kata-tester repo. We can then fix it ourselves or you can do a pull request if you want to help the project yourself.

To run a test, simply press `ctrl + alt + n`, or the play (⯈) button at the top right of your code window. Output will look similar to the one on Codewars.

## Helping the project

If you wish to help make Kata Test better, you can help by opening issues if you find a bug or a missing unit test method.

### Opening an issue

[TBD]

### Doing a pull request

[TBD]

## FAQ (Frequently asked questions)

1. [TBD]
2. [TBD]
3. [TBD]

## Directories

### kata-test

Is the unit testing library written in and for javascript / node.js Codewars katas. For more info and documentation check the [README.md](https://github.com/Mario-paul/kata-tester/blob/main/kata-test/README.md) file for kata-test.

### kata-template

Contains boilerplates for katas / testing environment. Copy kata-template directory into the appropriate kyu folder, rename it, and code away!
