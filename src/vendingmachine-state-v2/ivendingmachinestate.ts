import VendingMachine from "./vendingmachine";

// each of these methods should return the next state.
// the VendingMachine argument is used to send commands back to the vending machine
interface IVendingMachineState {
  addNickel(vm:VendingMachine)  : IVendingMachineState
  addDime(vm:VendingMachine)    : IVendingMachineState
  addQuarter(vm:VendingMachine) : IVendingMachineState
  getBalance () : number
}

export default IVendingMachineState