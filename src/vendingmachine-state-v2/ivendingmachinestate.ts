import VendingMachine from "./vendingmachine";

// PURPOSE:
// each method 
//  EFFECT: sends appropriate commands back to the given vending machine
//  RETURNS: the next state after the specified input

interface IVendingMachineState {
  addNickel(vm:VendingMachine)  : IVendingMachineState
  addDime(vm:VendingMachine)    : IVendingMachineState
  addQuarter(vm:VendingMachine) : IVendingMachineState
  getBalance () : number
}

export default IVendingMachineState