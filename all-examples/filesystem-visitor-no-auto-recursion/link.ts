import Directory from "./directory";
import Node from "./node"
import IFileSystemVisitor from "./ifilesystemvisitor";

class Link extends Node { 
  private realNode: Node;

  constructor(n: string, w: Node, p: Directory){
    super(n,p); 
    this.realNode = w;  
  }
  public getAbsoluteName() : string{
    return super.getAbsoluteName() + "@";
  }   
  public accept(v: IFileSystemVisitor) : void {
    v.visitLink(this);
  } 
}

export default Link