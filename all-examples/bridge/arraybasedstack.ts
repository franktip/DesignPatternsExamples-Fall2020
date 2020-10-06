import IStack from "./istack";
 
class ArrayBasedStack<T> implements IStack<T> {
  private elements : T[];    

  constructor(){
    this.elements = [];
    console.log("creating ArrayBasedStack")
  }
  public push(t: T): void { 
    this.elements.unshift(t);
  }
  public pop(): T {
    if ((this.elements.length === 0)){ 
      throw new Error("cannot pop from empty stack!")
    } else {
      return this.elements.shift();
    }
  }   
  public size(): number {
    return this.elements.length;
  }
}

export default ArrayBasedStack