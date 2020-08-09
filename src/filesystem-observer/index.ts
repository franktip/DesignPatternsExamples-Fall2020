import Directory from './directory'
import File from './file'
import FileObserver from './fileobserver'

let root = new Directory("");
let core = new File("core", root);

// create observer for file core
let obs = new FileObserver(core);
core.write("hello");
core.write("world"); 

