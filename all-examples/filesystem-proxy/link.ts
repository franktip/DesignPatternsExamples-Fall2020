import Directory from "./directory";
import Node from "./node"

class Link extends Node { 
  private realNode: Node;

  constructor(n: string, w: Node, p: Directory){
    super(n,p); 
    this.realNode = w;  
  }
  public getAbsoluteName() : string{
    return super.getAbsoluteName() + "@";
  }   
  public find(s: string) : Array<string> {
    let result = new Array<string>();
    if (this.name.indexOf(s) != -1){
      result.push(this.getAbsoluteName());
    }  
    let resultsViaLink = this.realNode.find(s);
    let n = this.realNode.getAbsoluteName().length;
    for (let r of resultsViaLink){
      let name = super.getAbsoluteName() + "/" + r.substring(n);
      result.push(name);
    }
    return result;
  }
}

export default Link