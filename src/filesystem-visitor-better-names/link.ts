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
  public acceptVisitor(v: IFileSystemVisitor) : void {
    v.ifLink(this);
  } 
}

export default Link