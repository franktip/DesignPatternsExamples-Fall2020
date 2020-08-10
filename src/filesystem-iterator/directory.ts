import Node from './node'
import Iterator from './iterator'

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
  public iterator() : Iterator<Node> {
    return new DirectoryIterator(this);
  }
  public getChildren(){ // can we avoid making this method public?
    return this.children;
  }

  private children: Array<Node>;
}

class DirectoryIterator implements Iterator<Node> {
  private files : Array<Node> ;
  private fileCnt : number;

  constructor(d: Directory) {
    this.files = d.getChildren(); 
    this.fileCnt = 0;
  }

  public first() : void { this.fileCnt = 0; }
  public next() : void { this.fileCnt++; }
  public isDone() : boolean {
    return this.fileCnt == this.files.length;
  }
  public current() : Node {
    return this.files[this.fileCnt];
  }
}  

export default Directory