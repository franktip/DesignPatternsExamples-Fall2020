import Directory from './directory';
import Link from './link';
import File from './file'

interface IFileSystemVisitor {
  ifFile(f: File) : void;
  ifDirectory(d: Directory): void;
  ifLink(l: Link): void;
}

export default IFileSystemVisitor