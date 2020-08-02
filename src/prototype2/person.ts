namespace P2 {

  class Address {
    constructor(public nr : number, public street: string, public city: string){ }
    toString() : string { return this.nr + " " + this.street + ", " + this.city;  }
  }
  class Person {
    constructor(public name : String, public address : Address){ }
    public toString() : string { return this.name + " lives at " + this.address; }
    public greet() : void { console.log("Hi, " + this.name); }
    public clone() : Person { return { ...this } }
  }
  
  var address = new Address(10, "5th Ave", "New York");
  var joe = new Person("Joe", address);
  console.log(joe.toString()); // prints "Joe lives at 10 5th Ave, New York"
  joe.greet(); // prints "Hi, Joe"
  var sam = joe.clone();    // creates object with the same properties as joe
  console.log(sam === joe); // prints false -- they are different objects
  console.log(sam.name);    // prints "Joe"
  console.log(sam instanceof Person); // prints false
  sam.greet(); // TypeError: sam.greet is not a function 
  // (error occurs because only properties are copied, methods are not!)

}