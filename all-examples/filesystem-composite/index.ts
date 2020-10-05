import Directory from './directory'
import File from './file'

let root = new Directory("");
let usr = new Directory("usr", root);
new File("core", root);
new File("adm", usr);
new Directory("foo", usr);
new File("bar1", usr);
new File("xbar2", usr);
new Directory("yybarzz3", usr);
console.log(root.find("bar"));
 
