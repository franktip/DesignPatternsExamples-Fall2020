import Directory from './directory'
import Node from './node'

class File extends Node { 
  private observers = new Array<IObserver>();

  constructor(n: string, p: Directory){ 
    super(n,p); 
  }
  public find(s: string ) : Array<string>{
    let result : Array<string>  = [];
    if (this.name.indexOf(s) != -1){
      result.push(this.getAbsoluteName());
    }  
    return result;
  }
  public attach(o: IObserver) : void{
    if (!this.observers.includes(o)){
      this.observers.push(o);
    }
  }
  public detach(o: IObserver) : void {
    this.observers.splice(this.observers.indexOf(o));
  }
  public notifyObservers() : void {
    for (let obs of this.observers){
      obs.update();
    }
  }
  public write(s: string) : void { 
    this.notifyObservers();
  }
}

export default File