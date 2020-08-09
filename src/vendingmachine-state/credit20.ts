import IVendingMachineState from "./ivendingmachinestate";
import Credit0 from "./credit0";
import VendingMachine from "./vendingmachine";

class Credit20 implements IVendingMachineState {
  private constructor(){ }
  private static  theInstance : Credit20;
  static instance() : Credit20{ 
    if (Credit20.theInstance === undefined){ 
      Credit20.theInstance = new Credit20();
    }
    return Credit20.theInstance;
  }
  public addNickel(v: VendingMachine) : void {
    v.dispenseProduct();
    v.changeState(Credit0.instance(v));     }
  public addDime(v: VendingMachine) : void {
    v.dispenseProduct(); v.refund(5);
    v.changeState(Credit0.instance(v)); }
  public addQuarter(v: VendingMachine) : void {
    v.dispenseProduct(); 
    v.refund(20);
    v.changeState(Credit0.instance(v));   
  }
  public getBalance() : number { 
    return 20; 
  }
}

export default Credit20