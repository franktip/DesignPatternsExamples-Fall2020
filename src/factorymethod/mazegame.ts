import Maze from './maze'
import Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';

class MazeGame {

  public makeMaze() : Maze { return new Maze(); }
  public makeRoom() : Room { return new Room(); }
  public makeWall() : Wall { return new Wall(); }
  public makeDoor(r1: Room, r2: Room){
    return new Door(r1, r2);
  }

  public createMaze(): Maze {
    var aMaze = this.makeMaze();
    var r1 = this.makeRoom();
    var r2 = this.makeRoom();
    var theDoor = this.makeDoor(r1, r2);
    aMaze.addRoom(r1);
    aMaze.addRoom(r2);
    r1.setSide(Direction.North, this.makeWall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, this.makeWall());
    r1.setSide(Direction.West, this.makeWall());
    r2.setSide(Direction.North, this.makeWall());
    r2.setSide(Direction.East, this.makeWall());
    r2.setSide(Direction.South, this.makeWall());
    r2.setSide(Direction.West, theDoor);
    return aMaze;
  }
}

export default MazeGame