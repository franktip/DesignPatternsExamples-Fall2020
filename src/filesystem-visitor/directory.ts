import Node from './node'
import IFileSystemVisitor from './ifilesystemvisitor';

class Directory extends Node {
  constructor(n: string, p?: Directory){ 
    super(n,p);
    this.children = []; 
  }
  public getAbsoluteName() : string {
    return super.getAbsoluteName() + "/";
  }  
  public add(n: Node) : void {
    this.children.push(n); 
  }
  public accept(v: IFileSystemVisitor) : void {
    v.visitDirectory(this);
    this.children.forEach((child) => child.accept(v))
  }
  private children: Array<Node>;
}

export default Directory