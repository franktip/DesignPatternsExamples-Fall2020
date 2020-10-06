import Room from "./room";
import PlainMazeFactory from "./plainmazefactory";
import ExplodingRoom from "./explodingroom";
import IMazeFactory from "./imazefactory";

class ExplodingRoomFactory extends PlainMazeFactory 
                           implements IMazeFactory {
  private roomCounter: number = 0
  public makeRoom(): ExplodingRoom {
    this.roomCounter++;
    // put a bomb in every other room
    return new ExplodingRoom((this.roomCounter % 2) == 0)
  }
}

export default ExplodingRoomFactory