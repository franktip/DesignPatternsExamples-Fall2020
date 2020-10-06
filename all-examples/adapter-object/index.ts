import StackAdapter from './stackadapter';

let s = new StackAdapter<String>();
s.push("foo");
s.push("bar");
s.push("baz");

// prints baz, bar, foo
while (s.size() > 0) { 
  console.log(s.pop());
}
