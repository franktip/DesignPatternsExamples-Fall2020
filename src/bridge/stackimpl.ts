interface StackImpl<T> {
  push(t: T) : void
  pop() : T
  size() : number
}

export default StackImpl