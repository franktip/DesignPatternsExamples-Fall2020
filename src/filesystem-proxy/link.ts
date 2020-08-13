import Directory from "./directory";
import Node from "./node"

class Link extends Node { 
  private realNode: Node;

  constructor(name: string, w: Node, p: Directory){
    super(name,p); 
    this.realNode = w;  
  }
  public getAbsoluteName() : string{
    return super.getAbsoluteName() + "@";
  }   
  public find(s: string) : Array<string> {
    let result =  (this.name.indexOf(s) != -1) ? [this.getAbsoluteName()] : []
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