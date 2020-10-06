import IVendingMachineState from "./ivendingmachinestate";
import VendingMachine from "./vendingmachine";

import Credit0 from "./credit0";
import Credit20 from "./credit20";

class Credit15Class implements IVendingMachineState {
  
  public addNickel(vm: VendingMachine) : IVendingMachineState {
    return Credit20
  }
  public addDime(vm: VendingMachine): IVendingMachineState {
    vm.dispenseProduct();
    vm.welcome();
    return Credit0
  }
  public addQuarter(vm: VendingMachine) : IVendingMachineState {
    vm.dispenseProduct();
    vm.refund(15);
    vm.welcome()
    return Credit0
  }
  public getBalance() : number {
    return 15;
  }
}

const Credit15 = new Credit15Class()
export default Credit15