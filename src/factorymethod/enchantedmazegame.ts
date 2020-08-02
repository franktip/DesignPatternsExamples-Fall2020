import MazeGame from "./mazegame";
import Room from "./room";
import Spell from "./spell";
import EnchantedRoom from "./enchantedroom";
import DoorNeedingSpell from "./doorneedingspell";

// classes EnchantedRoom, DoorNeedingSpell, and Spell as before

class EnchantedMazeGame extends MazeGame {
  public makeRoom() : Room {
    return new EnchantedRoom(this.castSpell());
  }
  public makeDoor(r1: Room, r2: Room){
    return new DoorNeedingSpell(r1, r2);
  }
  private castSpell() : Spell {
    return new Spell();
  }
}

export default EnchantedMazeGame;
