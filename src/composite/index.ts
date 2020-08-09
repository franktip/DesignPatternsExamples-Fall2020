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
 
// let x = [11,22,33]
// let y = [44,55]
// console.log(x)
// console.log(y)
// console.log(x.push(...y))
// console.log(x)
// x = [11,22,33]
// console.log(x.concat(y))
// console.log(x)