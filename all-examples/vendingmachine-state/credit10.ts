import IVendingMachineState from "./ivendingmachinestate";
import Credit0 from "./credit0";
import VendingMachine from "./vendingmachine";
import Credit15 from "./credit15";
import Credit20 from "./credit20";

class Credit10 implements IVendingMachineState {
  private constuctor(){ }
  private static theInstance : Credit10;
  static instance() : Credit10 { 
    if (Credit10.theInstance === undefined){ 
      Credit10.theInstance = new Credit10();
    }
    return Credit10.theInstance;
  }
  public addNickel(v: VendingMachine) : void {
    v.changeState(Credit15.instance());     }
  public addDime(v: VendingMachine) : void {
    v.changeState(Credit20.instance());   }
  public addQuarter(v: VendingMachine) : void {
    v.dispenseProduct(); v.refund(10);
    v.changeState(Credit0.instance(v));   }
  public getBalance() : number { 
    return 10; 
  }
}

export default Credit10