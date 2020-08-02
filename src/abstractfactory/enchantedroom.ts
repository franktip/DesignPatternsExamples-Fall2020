import Room from "./room";
import Spell from "./spell";

class EnchantedRoom extends Room {
  constructor(s : Spell){
    super();
    /* ... */
  }

  toString() : string {
    return "enchanted " + super.toString();
  }
}

export default EnchantedRoom;