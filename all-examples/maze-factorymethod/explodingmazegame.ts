import MazeGame from "./mazegame";
import Room from "./room";
import ExplodingRoom from "./explodingroom";

class ExplodingMazeGame extends MazeGame {
  public makeRoom(): ExplodingRoom {
    Room.roomCounter++;
    // put a bomb in every other room
    return new ExplodingRoom((Room.roomCounter % 2) == 0)
  }
}

export default ExplodingMazeGame