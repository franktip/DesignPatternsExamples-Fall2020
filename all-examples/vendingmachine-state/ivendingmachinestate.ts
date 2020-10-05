import VendingMachine from "./vendingmachine";

interface IVendingMachineState {
  addNickel(v: VendingMachine) : void
  addDime(v: VendingMachine) : void
  addQuarter(v: VendingMachine) : void
  getBalance() : number
}

export default IVendingMachineState