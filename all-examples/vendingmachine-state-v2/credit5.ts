import IVendingMachineState from "./ivendingmachinestate";
import VendingMachine from "./vendingmachine";
import Credit10 from "./credit10";
import Credit15 from "./credit15";
import Credit0 from "./credit0";

class Credit5Class implements IVendingMachineState {
  public addNickel(vm: VendingMachine): IVendingMachineState {
    return Credit10
  }
  public addDime(vm: VendingMachine): IVendingMachineState {
    return Credit15
  }
  public addQuarter(vm: VendingMachine): IVendingMachineState {
    vm.dispenseProduct();
    vm.refund(5);
    vm.welcome();
    return Credit0
  }
  public getBalance(): number { return 5 }
}

let Credit5 = new Credit5Class()
export default Credit5