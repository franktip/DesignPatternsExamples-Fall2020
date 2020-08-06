import Maze from './maze'
import Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';
import MazeFactory from './mazefactory';

class MazeGame {
  public createMaze(factory: MazeFactory): Maze {
    var aMaze = new Maze();
    var r1 = factory.makeRoom();
    var r2 = factory.makeRoom();
    var theDoor = factory.makeDoor(r1, r2);
    aMaze.addRoom(r1);
    aMaze.addRoom(r2);
    r1.setSide(Direction.North, factory.makeWall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, factory.makeWall());
    r1.setSide(Direction.West, factory.makeWall());
    r2.setSide(Direction.North, factory.makeWall());
    r2.setSide(Direction.East, factory.makeWall());
    r2.setSide(Direction.South, factory.makeWall());
    r2.setSide(Direction.West, theDoor);
    return aMaze;
  }
}

export default MazeGame