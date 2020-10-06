import Maze from "./maze";
import Room from "./room";
import Direction from "./direction";
import Wall from "./wall";
import Door from "./door";
import IMazeBuilder from "./imazebuilder";

class StandardMazeBuilder implements IMazeBuilder {
  public buildMaze(): void {
    this.theMaze = new Maze();
  }
  public buildRoom(): Room {
    var room = new Room();
    this.theMaze.addRoom(room);
    room.setSide(Direction.North, new Wall());
    room.setSide(Direction.South, new Wall());
    room.setSide(Direction.East, new Wall());
    room.setSide(Direction.West, new Wall());
    return room;
  }
  public buildDoor(r1: Room, d1: Direction, r2: Room, d2: Direction){
    var door = new Door(r1, r2);
    r1.setSide(d1, door);
    r2.setSide(d2, door);
  }
  public getMaze(): Maze {
    return this.theMaze;
  }
  private theMaze: Maze;
}

export default StandardMazeBuilder