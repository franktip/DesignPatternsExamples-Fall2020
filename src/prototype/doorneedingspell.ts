import Room from "./room";
import Door from "./door";

class DoorNeedingSpell extends Door {
  constructor(r1: Room, r2: Room){
    super(r1, r2);
    /* ... */
  }

  public toString() : string {
    return super.toString() + " (needing spell)";
  }

  public clone() : DoorNeedingSpell {
    return new DoorNeedingSpell(this.room1, this.room2);
  }
  public initialize(r1: Room, r2: Room): void {
    this.room1 = r1;
    this.room2 = r2;
    console.log("initializing Door#" + 
                this.doorNr + " between " + 
                r1 + " and " + r2 + " (needing spell)");
  }
}

export default DoorNeedingSpell;