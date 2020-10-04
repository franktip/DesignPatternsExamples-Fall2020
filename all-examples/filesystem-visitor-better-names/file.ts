import Directory from './directory'
import Node from './node'
import IFileSystemVisitor from './ifilesystemvisitor';

class File extends Node { 
  private content: string

  constructor(n: string, p: Directory, content: string){ 
    super(n,p); 
    this.content = content;
  }
  public acceptVisitor(v: IFileSystemVisitor) : void {
    v.ifFile(this);
  }
  public size() : number {
    return this.content.length;
  }
}

export default File