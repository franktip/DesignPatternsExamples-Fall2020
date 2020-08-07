import Maze from './maze'
import Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';
import IMazeFactory from './imazefactory';

function createMaze(factory: IMazeFactory): Maze {
  let theMaze = factory.makeMaze();
  let r1 = factory.makeRoom();
  let r2 = factory.makeRoom();
  let theDoor = factory.makeDoor(r1, r2);
  theMaze.addRoom(r1);
  theMaze.addRoom(r2);
  r1.setSide(Direction.North, factory.makeWall());
  r1.setSide(Direction.East, theDoor);
  r1.setSide(Direction.South, factory.makeWall());
  r1.setSide(Direction.West, factory.makeWall());
  r2.setSide(Direction.North, factory.makeWall());
  r2.setSide(Direction.East, factory.makeWall());
  r2.setSide(Direction.South, factory.makeWall());
  r2.setSide(Direction.West, theDoor);
  return theMaze;
}

export default createMaze