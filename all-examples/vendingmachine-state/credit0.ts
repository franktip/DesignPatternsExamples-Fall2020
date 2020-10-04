import IVendingMachineState from "./ivendingmachinestate";
import VendingMachine from "./vendingmachine";
import Credit5 from "./credit5";
import Credit10 from "./credit10";

class Credit0 implements IVendingMachineState {
  private constructor(){ }
  private static theInstance: Credit0;
  static instance(v: VendingMachine) : Credit0 {
    if (Credit0.theInstance === undefined) {
      Credit0.theInstance = new Credit0();
    }
    v.welcome(); 
    return Credit0.theInstance;
  }
  public addNickel(v: VendingMachine) : void {
    v.changeState(Credit5.instance());    }
  public addDime(v: VendingMachine) : void {
    v.changeState(Credit10.instance());   }
  public addQuarter(v: VendingMachine) : void {
    v.dispenseProduct();
    v.changeState(Credit0.instance(v));   }
  public getBalance() : number { return 0; }
}

export default Credit0