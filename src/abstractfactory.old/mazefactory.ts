import Maze from "../abstractfactory/maze"
import Wall from "../abstractfactory/wall";
import Room from "../abstractfactory/room";
import Door from "../abstractfactory/door";

class MazeFactory {
  public makeMaze() : Maze {
    return new Maze();
  }
  public makeWall() : Wall {
    return new Wall();
  }
  public makeRoom() : Room {
    return new Room();
  }
  public makeDoor(r1: Room, r2: Room) : Door {
    return new Door(r1, r2);
  }
}

export default MazeFactory