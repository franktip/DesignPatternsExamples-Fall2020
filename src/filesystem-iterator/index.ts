import Directory from './directory'
import File from './file'
import IIterator from './iiterator';

let root = new Directory("");
let usr = new Directory("usr", root);
new File("core", root);
new File("adm", usr);
new Directory("foo", usr);
new File("bar1", usr);

// use iterator to print contents of /usr
let it = usr.iterator();
for (it.first(); !it.isDone(); it.next()){
  let n = it.current();
  console.log(n.getAbsoluteName());
}
