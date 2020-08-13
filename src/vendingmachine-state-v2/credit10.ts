import IVendingMachineState from "./ivendingmachinestate";
import VendingMachine from "./vendingmachine";

import Credit0 from "./credit0";
import Credit15 from "./credit15";
import Credit20 from "./credit20";

class Credit10Class implements IVendingMachineState {
  public addNickel(vm: VendingMachine): IVendingMachineState { 
    return Credit15 
  }
  public addDime(v: VendingMachine): IVendingMachineState { 
    return Credit20 
  }
  public addQuarter(vm: VendingMachine): IVendingMachineState {
    vm.dispenseProduct();
    vm.refund(10);
    vm.welcome();
    return Credit0
  }
  public getBalance(): number {
    return 10;
  }
}

const Credit10 = new Credit10Class()

export default Credit10