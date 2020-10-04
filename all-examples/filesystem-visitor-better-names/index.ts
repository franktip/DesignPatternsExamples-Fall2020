import Directory from './directory'
import File from './file'
import Link from './link';
import DuVisitor from './duvisitor';

let root = new Directory("");
new File("core", root, "hello");
let usr = new Directory("usr", root);
new File("adm", usr, "there");
new Directory("foo", usr);
new File("bar1", usr, "abcdef");
new File("xbar2", usr, "abcdef");
new File("yybarzz3", usr, "abcdef");
let link = new Link("link", usr, root);
new Link("link2", link, root);

let visitor = new DuVisitor(root);
// root.acceptVisitor(visitor);
visitor.report();
 
