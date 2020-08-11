import Directory from './directory'
import Node from './node'

class File extends Node {
  constructor(n: string, p: Directory) {
    super(n, p);
  }
  public find(s: string): Array<string> {
    return (this.name.indexOf(s) != -1) ? [this.getAbsoluteName()] : []
  }
}

export default File