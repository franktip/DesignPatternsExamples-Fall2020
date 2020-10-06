import Node from './node'
import IFileSystemVisitor from './ifilesystemvisitor';

class Directory extends Node {

  private children: Array<Node>;

  constructor(n: string, p?: Directory){ 
    super(n,p);
    this.children = []; 
  }
  public getAbsoluteName() : string {
    return super.getAbsoluteName() + "/";
  } 
  
  public getChildren(): Array<Node> { return this.children }

  public add(n: Node) : void {
    this.children.push(n); 
  }
  public accept(v: IFileSystemVisitor) : void {
    v.visitDirectory(this);
    // no, it's up to the visitor to decide whether to recur on the children
    // this.children.forEach((child) => child.accept(v))
  }
  
}

export default Directory