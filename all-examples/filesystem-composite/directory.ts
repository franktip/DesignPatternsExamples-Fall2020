import Node from './node'

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
    let startVal = (this.name.indexOf(s) != -1) ? [this.getAbsoluteName()] : []
    return this.children.reduce( (sofar, child) => sofar.concat(child.find(s)), startVal)
  }
}

export default Directory