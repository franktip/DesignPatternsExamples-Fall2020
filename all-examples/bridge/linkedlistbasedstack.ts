import IStack from "./istack";

class ListNode<T> {
  constructor(value: T){
    this.value = value;
    this.prev = null;
    this.next = null;
  }
  public value : T;
  public next: ListNode<T>;
  public prev: ListNode<T>;
}

class LinkedListBasedStack<T> implements IStack<T> {
  private tail : ListNode<T>;
  private count: number;

  constructor(){
    this.tail = null;
    this.count = 0;
    console.log("creating LinkedListBasedStack")
  }

  public push(t: T) : void {
    if (this.tail === null){
      this.tail = new ListNode(t);
    } else {
      this.tail.next = new ListNode(t);
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
    }   
    this.count++;
  }
  public pop() : T {
    if (this.tail === null){
      throw new Error("cannot pop from empty stack!")
    } else {
      let ret = this.tail.value;
      this.tail = this.tail.prev;
      this.count--;
      return ret;
    }
  }
  public size() : number {
    return this.count;
  }
}

export default LinkedListBasedStack