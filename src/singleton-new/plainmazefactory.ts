import IMazeFactory from "./imazefactory"
import Wall from "./wall"
import Door from "./door"
import Room from "./room"
import Maze from "./maze"

class PlainMazeFactory implements IMazeFactory {
  private constructor(){}

  public static instance(): PlainMazeFactory {
    if (PlainMazeFactory.theFactory === undefined){
      PlainMazeFactory.theFactory = new PlainMazeFactory();
    }
    return this.theFactory;
  }
  private static theFactory: PlainMazeFactory;

  public makeMaze(): Maze { return new Maze() }
  public makeRoom(): Room { return new Room() }
  public makeWall(): Wall { return new Wall() }
  public makeDoor(room1: Room, room2: Room): Door { return new Door(room1, room2) }
}

export default PlainMazeFactory