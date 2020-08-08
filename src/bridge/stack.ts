import StackType from "./stacktype";
import ArrayBasedStack from "./arraybasedstack";
import LinkedListBasedStack from "./linkedlistbasedstack";
import StackImpl from "./stackimpl";

class Stack<T> {
  constructor(implType: StackType){
    switch (implType){
    case StackType.LinkedList:
      this.impl = new LinkedListBasedStack<T>();
      break;
    case StackType.ArrayList:
      this.impl = new ArrayBasedStack<T>();
      break;
    }
  }
  public push(t: T): void { this.impl.push(t); }
  public pop(): T { return this.impl.pop(); }
  public size(): number { return this.impl.size(); }

  private impl: StackImpl<T>;
}

export default Stack 