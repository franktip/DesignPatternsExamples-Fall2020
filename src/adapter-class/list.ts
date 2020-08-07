
class List<T> {
  constructor(){ 
    this.elements = [];
  }

  private elements : T[]; 

  public add(t: T){ 
    this.elements.push(t); 
  }
  public remove() : T { 
    let elem = this.elements[this.elements.length-1];
    this.elements.splice(this.elements.length-1, 1);
    return elem;
  }
  public size(){
    return this.elements.length;
  }
}

export default List