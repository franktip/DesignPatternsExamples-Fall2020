import File from './file'
import Directory from './directory'
import Link from './link'
import IFileSystemVisitor from './ifilesystemvisitor';

class DuVisitor implements IFileSystemVisitor {
  constructor(private nrFiles = 0,
              private nrDirectories = 0,
              private nrLinks = 0,
              private totalSize = 0){}
  
  public visitFile(f: File) : void {
    this.nrFiles++;
    this.totalSize += f.size();
  }
  public visitDirectory(d: Directory) : void {
    this.nrDirectories++;
  }
  public visitLink(l: Link) : void {
    this.nrLinks++;
  }
 
  public report() : void {
    console.log("files:       " + this.nrFiles);
    console.log("directories: " + this.nrDirectories);
    console.log("links:       " + this.nrLinks);
    console.log("total size:  " + this.totalSize);
  }
}

export default DuVisitor