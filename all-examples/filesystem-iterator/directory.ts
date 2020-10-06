import Node from './node'
import IIterator from './iiterator'

class Directory extends Node {
  private children: Array<Node>;

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
  public find(s: string) : Array<string> {
    let result = new Array<string>();
    if (this.name.indexOf(s) != -1){
      result.push(this.getAbsoluteName());
    }
    for (let child of this.children){
      result.push(...child.find(s));   // TODO: Mitch to rewrite this more functionally?
    }
    return result;
  }
  public iterator() : IIterator<Node> {
    return new DirectoryIterator(this);
  }
  public getChildren(){ // can we avoid making this method public?
    return this.children;
  }
}

class DirectoryIterator implements IIterator<Node> {
  private files : Array<Node> ;
  private fileCount : number;

  constructor(d: Directory) {
    this.files = d.getChildren(); 
    this.fileCount = 0;
  }

  public first() : void { this.fileCount = 0; }
  public next() : void { this.fileCount++; }
  public isDone() : boolean {
    return this.fileCount == this.files.length;
  }
  public current() : Node {
    return this.files[this.fileCount];
  }
}  

export default Directory