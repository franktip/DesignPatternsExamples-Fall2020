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
}

export default DoorNeedingSpell;