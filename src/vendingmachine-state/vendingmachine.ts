import IVendingMachineState from "./ivendingmachinestate";
import Credit0 from "./credit0";

class VendingMachine {
  private state: IVendingMachineState;

  public constructor() {
    this.state = Credit0.instance(this);
  }
  // methods welcome(), displayBalance() etc. as before
  
  public welcome() : void {
    console.log("Welcome. Please enter $0.25 to buy product.");
  }
  public dispenseProduct() : void {
    console.log("dispensing product...");
  }
  public displayBalance() : void {
    console.log("balance is now: " + this.state.getBalance());
  }
  public refund(i: number) : void {
    console.log("refunding: " + i);
  }

  public changeState(state: IVendingMachineState) : void{
    this.state = state; 
    this.displayBalance();
  }

  public addNickel() : void { this.state.addNickel(this); }
  public addDime() : void { this.state.addDime(this); }
  public addQuarter() : void { this.state.addQuarter(this); }
}

export default VendingMachine