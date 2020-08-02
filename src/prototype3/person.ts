namespace P3 {
  class Address {
    constructor(public nr : number,  public street: string, public city: string){ }
    toString() : string { return this.nr + " " + this.street + ", " + this.city;  }
    setStreet(street: string){ this.street = street; }
  }
  class Person {
    constructor(public name : String, public address : Address){ }
    public toString() : string { return this.name + " lives at " + this.address; }
    setName(name: string) { this.name = name; }
    setAddress(address : Address) { this.address = address; }
    getAddress() : Address { return this.address; }
    public greet() : void { console.log("Hi, " + this.name); }
    public clone() : Person { return Object.assign(Object.create(Object.getPrototypeOf(this)), this); }
  }

  var address = new Address(10, "5th Ave", "New York");
  var joe = new Person("Joe", address);
  console.log(joe.toString()); // prints "Joe lives at 10 5th Ave, New York"
  joe.greet(); // prints "Hi, Joe"
  var sam = joe.clone(); // creates object with the same properties as joe
  console.log(sam === joe); // prints false -- they are different objects
  sam.setName("Sam");
  console.log(sam.name); // prints "Sam"
  console.log(sam instanceof Person); // prints true --- Sam is a Person!
  sam.greet(); // prints "Hi, Sam"
  joe.setAddress((new Address(100, "Mass Ave.", "Boston")));
  console.log(joe.toString()); // prints "Joe lives at 100 Mass Ave., Boston"
  console.log(sam.toString()); // prints "Sam lives at 10 5th Ave, New York"
}

