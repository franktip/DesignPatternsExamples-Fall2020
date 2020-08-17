import File from './file'

class FileObserver implements IObserver {
  constructor(private subject: File){
    subject.attach(this); 
  }
  public update() : void {
    console.log("file " +
     this.subject.getAbsoluteName() + " has changed.");
  }
}

export default FileObserver