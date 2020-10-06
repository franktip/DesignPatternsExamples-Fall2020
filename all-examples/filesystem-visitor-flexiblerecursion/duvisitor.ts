import File from './file'
import Directory from './directory'
import Link from './link'
import IFileSystemVisitor from './ifilesystemvisitor';

class DuVisitor implements IFileSystemVisitor {
  
  private nrFiles = 0,
  private nrDirectories = 0,
  private nrLinks = 0,
  private totalSize = 0
  
  // parameter specifies whether or not to recurse into directories
  constructor(private recurseIntoDirectories = true){}
  
  public visitFile(f: File) : void {
    this.nrFiles++;
    this.totalSize += f.size();
  }
  public visitDirectory(d: Directory) : boolean {
    this.nrDirectories++;
    // we always want to traverse one directory 
    return this.recurseIntoDirectories || this.nrDirectories <= 1;
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