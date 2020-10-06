# DesignPatternsExamples-Fall2020

This repository includes the code examples used in CS4530/5500 (Fall 2020)
during the lectures on Design Patterns (weeks 5 and 6) by Profs. Bell, Tip, and Wand.

The various examples are now kept in the folder all-examples/ .  To run
one or more of the examples, move its folder to live directly under src/js .
We have updated the npm scripts so that "npm run run" will compile all .ts files
contained in the directory tree under src, and will run all the
dist/*/index.js files it finds. 

The repository includes a few examples in addition to the ones covered in the lectures:

* filesystem-visitor-flexiblerecursion illustrates an advanced version of the visitor 
  pattern that enables concrete visitors to specify whether a visitor should recursively 
  visit a node's children.

* vendingmachine-state-v2 illustrates an alternative solution to the vending machine
  problem, which also uses the State pattern. This approach avoids the use of singletons
  and relies on the ability of TypeScript modules to export a single value, and it places
  the logic for state transitions in the context.

