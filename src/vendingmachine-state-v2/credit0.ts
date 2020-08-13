import IVendingMachineState from "./ivendingmachinestate";
import VendingMachine from "./vendingmachine";
import Credit5 from "./credit5";
import Credit10 from "./credit10";

class credit0Class implements IVendingMachineState { 
  
  public addNickel(vm:VendingMachine): IVendingMachineState {
    return Credit5
  }
  public addDime(vm:VendingMachine): IVendingMachineState {
    return Credit10
  } 
  public addQuarter(vm: VendingMachine) :IVendingMachineState {
    vm.dispenseProduct();
    vm.welcome();
    return Credit0
  }
  public getBalance() : number { return 0 }
}

const Credit0 = new credit0Class()
export default Credit0