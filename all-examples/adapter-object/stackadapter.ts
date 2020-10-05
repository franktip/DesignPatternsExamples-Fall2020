import IStack from "./istack";
import List from './list'

class StackAdapter<T> implements IStack<T> {

  private theList: List<T>;

  constructor(){
    this.theList = new List<T>();
  }

  public push(t: T): void {
    this.theList.add(t);  
  }
  public pop(): T {
    return this.theList.remove(); 
  }
  public size() : number {
    return this.theList.size()
  }
}

export default StackAdapter