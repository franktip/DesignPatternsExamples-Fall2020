import Directory from './directory'
import Node from './node'
import IFileSystemVisitor from './ifilesystemvisitor';

class File extends Node { 
  private content: string

  constructor(n: string, p: Directory, content: string){ 
    super(n,p); 
    this.content = content;
  }
  public accept(v: IFileSystemVisitor) : void {
    v.visitFile(this);
  }
  public size() : number {
    return this.content.length;
  }
}

export default File