interface IIterator<T> {
  first() : void     // set to first
  next() : void      // advance
  isDone() : boolean // is done
  current() : T      // get current
}

export default IIterator