import Directory from './directory'
import IFileSystemVisitor from './ifilesystemvisitor';

abstract class Node {
  // some common behavior omitted... 

  // PURPOSE: applies the visitor v to this node and to every node in the
  // filesystem beneath it.
  public abstract accept(v: IFileSystemVisitor): void;
}

// a class with no children its hierarchy
class File extends Node {
  private contents: string = ""

  // run the visitor on this node.
  // files don't have any descendants in the tree, 
  // so nothing else to do
  public accept(v: IFileSystemVisitor): void {
    v.visitFile(this);
  }
}

// a class with children in its hierarchy
class Directory extends Node {
  private children : Array<Node> = []  
  // methods for manipulating children omitted

  // apply the visitor this node, and to each of its children
  // (and therefore to all of its descendents in the filesystem)
  public accept(v: IFileSystemVisitor) : void {
    v.visitDirectory(this);
    this.children.forEach((child) => child.accept(v))
  }
 
}

// a sample visitor
class closeVisitor implements IFileSystemVisitor {
  visitFile (f:File) {
    // code to close a file f
  }
  visitDirectory (d:Directory) {
    // code to close a directory d
  }
  visitLink (l:Link) {
    // code to close a link l
  }
}

// invoking the visitor on a node
let startingNode = ...Directory
let theVisitor= new closeVisitor()
startingNode.accept(theVisitor)

export default Node