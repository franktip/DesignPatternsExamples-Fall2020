import Maze from "./maze"
import Wall from "./wall";
import Room from "./room";
import Door from "./door";

class MazeFactory {
  private constructor(){}
  public static instance(): MazeFactory {
    if (MazeFactory.theFactory === undefined){
      MazeFactory.theFactory = new MazeFactory();
    }
    return this.theFactory;
  }
  private static theFactory: MazeFactory;

  public makeMaze() : Maze { return new Maze(); }
  public makeWall() : Wall { return new Wall(); }
  public makeRoom() : Room { return new Room(); }
  public makeDoor(r1: Room, r2: Room) : Door { return new Door(r1, r2); }
}

export default MazeFactory