import {Maze,IMaze} from './maze'
import {PlainRoom} from './room'
import Door from './door'
import Direction from './direction';
import {Wall} from './wall';


export function Maze1 () : IMaze {
    let theMaze = new Maze();
    let r1 = new PlainRoom();
    let r2 = new PlainRoom();
    let theDoor = new Door(r1, r2);
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


export default Maze1