class VendingMachine {
  private balance: number;

  constructor() {
    this.balance = 0; 
    this.welcome();
  }
  public welcome() : void {
    console.log("Welcome. Please enter $0.25 to buy product.");
  }
  public dispenseProduct() : void {
    console.log("dispensing product...");
  }
  public displayBalance() : void {
    console.log("balance is now: " + this.balance);
  }
  public refund(i: number) : void {
    console.log("refunding: " + i);
  }

  public addNickel() : void {
    switch (this.balance) {
    case 0 : { this.balance = 5;
    this.displayBalance();
    break;  }
    case 5 : { this.balance = 10;
    this.displayBalance();
    break; }
    case 10 : { this.balance = 15;
    this.displayBalance();
    break; }
    case 15 : { this.balance = 20;
    this.displayBalance();
    break; }
    case 20 : { this.dispenseProduct();
    this.balance = 0; this.welcome();
    break; }
    }
  }

  public addDime() : void {
    switch (this.balance) {
    case 0 : { this.balance = 10;
    this.displayBalance();
    break; }
    case 5 : { this.balance = 15;
    this.displayBalance();
    break; }
    case 10 : { this.balance = 20;
    this.displayBalance();
    break; }
    case 15 : { this.dispenseProduct();
    this.balance = 0; this.welcome();
    break; }
    case 20 : { this.dispenseProduct();
    this.refund(5); this.balance = 0; this.welcome();
    break; }
    }
  }
  
  public addQuarter() : void {
    switch (this.balance) {
    case 0 : { this.dispenseProduct();
    this.balance = 0; this.welcome();
    break; }
    case 5 : { this.dispenseProduct();
    this.refund(5); this.balance = 0; this.welcome();
    break; }
    case 10 : { this.dispenseProduct();
    this.refund(10); this.balance = 0; this.welcome();
    break; }
    case 15 : { this.dispenseProduct();
    this.refund(15); this.balance = 0; this.welcome();
    break; }
    case 20 : { this.dispenseProduct();
    this.refund(20); this.balance = 0; this.welcome();
    break; }
    }
  }
}

export default VendingMachine