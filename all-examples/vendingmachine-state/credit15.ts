import IVendingMachineState from "./ivendingmachinestate";
import Credit0 from "./credit0";
import VendingMachine from "./vendingmachine";
import Credit20 from "./credit20";

class Credit15 implements IVendingMachineState {
  private constructor(){ }
  private static theInstance : Credit15;
  static instance() : Credit15 { 
    if (Credit15.theInstance === undefined){ 
      Credit15.theInstance = new Credit15();
    }
    return Credit15.theInstance;
  }
  public addNickel(v: VendingMachine) : void {
    v.changeState(Credit20.instance());     }
  public addDime(v: VendingMachine) : void {
    v.dispenseProduct();
    v.changeState(Credit0.instance(v)); }
  public addQuarter(v: VendingMachine) : void {
    v.dispenseProduct(); 
    v.refund(15);
    v.changeState(Credit0.instance(v));   }
  public getBalance() : number { 
    return 15; 
  }
}

export default Credit15