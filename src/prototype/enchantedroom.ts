import Room from "./room";
import Spell from "./spell";

class EnchantedRoom extends Room {
  constructor(s : Spell){
    super();
    this.spell = s;
    /* ... */
  }

  toString() : string {
    return "enchanted " + super.toString();
  }

  public clone() : Room {
    var room = new EnchantedRoom(this.spell);
    room.northSide = this.northSide;
    room.southSide = this.southSide;
    room.eastSide = this.eastSide;
    room.westSide = this.westSide;
    return room;
  }

  private spell : Spell;
}

export default EnchantedRoom;