# DesignPatternsExamples-Fall2020

This fork reorganizes the multiple examples for better use with VSCode, and
two new variants on filesystem-visitor.

1.  The various examples are now kept in the folder all-examples/ .  To run
one or more of the examples, move its folder to live directly under src/ .
I've updated the npm scripts so that "npm run run" will compile all .ts files
contained in the directory tree under src, and will run all the
dist/*/index.js files it finds.  [Thanks to Satya who showed me how to do
this.]

2. I've added a variant entitled filesystem-visitor-no-autorecursion.  I did
not like the fact that recursion through directories was automatic. It's as
if every "ls" was an "ls -R".   The -no-autorecursion removes the recursive
calls to the visitor from directory.ts ; instead it adds a getChildren method
to the Directory class, and the DuVisitor explicitly recurs on the children.

3. I've added a variant entitled filesystem-visitor-better-names.  This is
identical to filesystem-visitor-no-autorecursion except that

  (a) "accept" in Node is now called "acceptVisitor", and
  (b) visitFile, etc, are now called "ifFile".  I think these names make the
  connection between the visitor pattern and a case structure clearer.

  also
  (c) duVisitor now takes one constructor argument, called startingNode, and its
  constructor initiates the visit by calling
  startingNode.acceptVisitor(this).

  also
  (d) I've cleaned up the code inside duVisitor to move all those private
  variables out of the constructor where I don't think they belonged.

Enjoy!
