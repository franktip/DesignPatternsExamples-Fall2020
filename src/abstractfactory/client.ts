import Maze from './maze'
import * as Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';
import { PlainMazeFactory } from './factory';

export function Maze1 () : Maze {
    let theMaze = new Maze ();
    let theFactory = new PlainMazeFactory();
    let r1 = theFactory.makeRoom()
    let r2 = theFactory.makeRoom()
    let theDoor = theFactory.makeDoor(r1, r2);
    theMaze.addRoom(r1);
    theMaze.addRoom(r2);
    r1.setSide(Direction.North, theFactory.makeWall());
    r1.setSide(Direction.East, theDoor);
    r1.setSide(Direction.South, theFactory.makeWall());
    r1.setSide(Direction.West, theFactory.makeWall());
    r2.setSide(Direction.North, theFactory.makeWall());
    r2.setSide(Direction.East, theFactory.makeWall());
    r2.setSide(Direction.South, theFactory.makeWall());
    r2.setSide(Direction.West, theDoor);
    return theMaze;
  }

