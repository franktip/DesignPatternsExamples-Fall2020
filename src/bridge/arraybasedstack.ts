import StackImpl from "./stackimpl";
 
class ArrayBasedStack<T> implements StackImpl<T> {
  private elements : T[];    
  private count : number;

  constructor(){
    this.elements = [];
    this.count = 0;
    console.log("creating ArrayBasedStack")
  }

  public push(t: T): void { 
    this.elements.push(t);
    this.count++;
  }
  public pop(): T {
    if ((this.count === 0)){ 
      throw new Error("cannot pop from empty stack!")
    } else {
      let elem = this.elements[this.count-1]
      this.count--;
      return elem;
    }
  }   
  public size(): number {
    return this.count;
  }
}

export default ArrayBasedStack