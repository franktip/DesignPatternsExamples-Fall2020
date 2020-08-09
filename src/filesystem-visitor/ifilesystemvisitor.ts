import Directory from './directory';
import Link from './link';
import File from './file'

interface IFileSystemVisitor {
  visitFile(f: File) : void;
  visitDirectory(d: Directory): void;
  visitLink(l: Link): void;
}

export default IFileSystemVisitor