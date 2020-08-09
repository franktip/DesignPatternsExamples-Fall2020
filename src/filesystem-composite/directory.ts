import Node from './node'

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
  private children: Array<Node>;
}

export default Directory