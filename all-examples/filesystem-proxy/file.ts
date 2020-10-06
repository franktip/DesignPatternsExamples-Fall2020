import Directory from './directory'
import Node from './node'

class File extends Node { 
  constructor(n: string, p: Directory){ 
    super(n,p); 
  }
  public find(s: string ) : Array<string>{
    let result : Array<string>  = [];
    if (this.name.indexOf(s) != -1){
      result.push(this.getAbsoluteName());
    }  
    return result;
  }
}

export default File