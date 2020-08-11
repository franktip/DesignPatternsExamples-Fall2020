import Directory from './directory'
import File from './file'
import Link from './link';

let root = new Directory("");
new File("core", root);
let usr = new Directory("usr", root);
new File("adm", usr);
let foo = new Directory("foo", usr);
new File("bar1", foo);
new File("xbar2", foo);
new File("yybarzz3", foo);
let link = new Link("link1", usr, root);
new Link("link2", link, root);
console.log(root.find("bar"));

 
