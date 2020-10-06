import Maze from './maze'
import Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';

function createMaze(): Maze {
  var theMaze = new Maze();
  var r1 = new Room();
  var r2 = new Room();
  var theDoor = new Door(r1, r2);
  theMaze.addRoom(r1);
  theMaze.addRoom(r2);
  r1.setSide(Direction.North, new Wall());
  r1.setSide(Direction.East, theDoor);
  r1.setSide(Direction.South, new Wall());
  r1.setSide(Direction.West, new Wall());
  r2.setSide(Direction.North, new Wall());
  r2.setSide(Direction.East, new Wall());
  r2.setSide(Direction.South, new Wall());
  r2.setSide(Direction.West, theDoor);
  return theMaze;
}

export default createMaze