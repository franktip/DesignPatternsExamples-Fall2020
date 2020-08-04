import MazeFactory from "./mazefactory";
import EnchantedRoom from "./enchantedroom";
import Spell from "./spell";
import Room from "./room";
import Door from "./door";
import DoorNeedingSpell from "./DoorNeedingSpell";

class EnchantedMazeFactory extends MazeFactory {
  public makeRoom() : Room {
    return new EnchantedRoom(this.castSpell());
  }
  public makeDoor(r1: Room, r2: Room) : Door {
    return new DoorNeedingSpell(r1, r2);
  }
  private castSpell() : Spell {
    return new Spell();
  }
}

export default EnchantedMazeFactory;