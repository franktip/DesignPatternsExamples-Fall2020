import IStack from "./istack";
import List from './list'

class StackAdapter<T> extends List<T> implements IStack<T> {

  public push(t: T): void {
    super.add(t);  
  }
  public pop(): T {
    return super.remove();  
  }
  // inherit size() from superclass

}

export default StackAdapter