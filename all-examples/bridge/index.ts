import Stack from "./stack";
import StackType from "./stacktype";

let s = new Stack<string>(StackType.ArrayList);
s.push("foo");
s.push("bar");
s.push("baz");

// prints baz, bar, foo
while (s.size() > 0) { 
  console.log(s.pop());
}