import IVendingMachineState from "./ivendingmachinestate";
import VendingMachine from "./vendingmachine";
import Credit10 from "./credit10";
import Credit15 from "./credit15";
import Credit0 from "./credit0";

class Credit5 implements IVendingMachineState {
  private constructor(){ }
  private static theInstance: Credit5;
  static instance() : Credit5 { 
    if (Credit5.theInstance === undefined){ 
      Credit5.theInstance = new Credit5();
    }
    return Credit5.theInstance;
  }
  public addNickel(v: VendingMachine) : void {
    console.log("Credit5.addNickel");
    v.changeState(Credit10.instance());     }
  public addDime(v: VendingMachine) : void {
    v.changeState(Credit15.instance());   }
  public addQuarter(v: VendingMachine) : void {
    v.dispenseProduct(); 
    v.refund(5);
    v.changeState(Credit0.instance(v));   }
  public getBalance() : number { 
    return 5; 
  }
}

export default Credit5