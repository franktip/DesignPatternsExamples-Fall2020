import Node from './node'

class Directory extends Node {

  private children: Array<Node>;

  constructor(n: string, p?: Directory) {
    super(n, p);
    this.children = [];
  }

  public getAbsoluteName(): string {
    return super.getAbsoluteName() + "/";
  }
  public add(n: Node): void {
    this.children.push(n);
  }
  public find(s: string): Array<string> {
    let result = new Array<string>();
    if (this.name.indexOf(s) != -1) {
      result.push(this.getAbsoluteName());
    }

    // original
    // for (let child of this.children) {     
    //   result.push(...child.find(s));   // TODO: Mitch to rewrite this more functionally?
    // }
    // return result

    // this one works
    // foo.push(...) side-effects foo (but only returns the length of the result)
    //
    // this.children.forEach(function(child){result.push(...child.find(s))})
    // return result;                                                        

    // this one also works
    // foo.concat(...) is functional, so you need to assign the result
    //
    // this.children.forEach(function (child) {
    //   result = result.concat(child.find(s))
    // })
    // return result;

    // as does this one
    // here the assignment is carried out in the plumbing of 'reduce'
    //
    return this.children.reduce(function (sofar, child) {
      return sofar.concat(child.find(s))
    },
      result)
  }
  
  // yet another version:
  public find2(s: string): Array<string> {
    let roots = [this.getAbsoluteName()].filter((e) => e.indexOf(s) != -1)
    return this.children.reduce(
      (sofar, child) => sofar.concat(child.find(s)),
      roots)
  }
}



export default Directory