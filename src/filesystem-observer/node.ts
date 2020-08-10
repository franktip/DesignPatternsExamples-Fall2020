import Directory from './directory'

abstract class Node {
  protected name: string;
  protected parent: Directory;

  constructor(name: string, parent: Directory) {
    this.name = name; this.parent = parent;
    if (this.parent != null) { this.parent.add(this); }
  }
  public getAbsoluteName() : string {
    if (this.parent != null) {
      return this.parent.getAbsoluteName() + this.name;
    }
    return this.name;
  }
  public toString() : string { return this.getAbsoluteName(); }
  public abstract find(s: string) : Array<string>;
}

export default Node