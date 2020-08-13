import IVendingMachineState from "./ivendingmachinestate";
import Credit0 from "./credit0";
import VendingMachine from "./vendingmachine";

class Credit20Class implements IVendingMachineState {
  
  public addNickel(vm: VendingMachine) : IVendingMachineState {
    vm.dispenseProduct();
    vm.welcome();
    return Credit0
   }
  public addDime(vm: VendingMachine) : IVendingMachineState {
    vm.dispenseProduct(); 
    vm.refund(5);
    vm.welcome()
    return Credit0 
  }
  public addQuarter(vm: VendingMachine) : IVendingMachineState {
    vm.dispenseProduct(); 
    vm.refund(20);
    vm.welcome();
    return Credit0   
  }
  public getBalance() : number { return 20 } 
}

const Credit20 = new Credit20Class()

export default Credit20