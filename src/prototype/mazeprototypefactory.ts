import MazeFactory from "./mazefactory";
import Maze from "./maze";
import Room from "./room";
import Door from "./door";
import Wall from "./wall";

class MazePrototypeFactory extends MazeFactory {
  constructor(m: Maze, w: Wall, r: Room, d: Door){
    super();
    this.prototypeMaze = m; this.prototypeWall = w;
    this.prototypeRoom = r; this.prototypeDoor = d;
  }
  public makeMaze() : Maze { return this.prototypeMaze.clone(); }
  public makeRoom() : Room { return this.prototypeRoom.clone(); }
  public makeWall() : Wall { return this.prototypeWall.clone(); }
  public makeDoor(r1: Room, r2: Room) : Door {
    var door: Door = this.prototypeDoor.clone();
    door.initialize(r1, r2);
    return door;
  }
  private prototypeMaze: Maze;
  private prototypeRoom: Room;
  private prototypeDoor: Door;
  private prototypeWall: Wall;
}

export default MazePrototypeFactory;