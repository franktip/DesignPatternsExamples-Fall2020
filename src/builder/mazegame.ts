import Maze from './maze'
import Room from './room'
import Door from './door'
import Direction from './direction';
import Wall from './wall';
import MazeBuilder from './mazebuilder';

class MazeGame {
  public createMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();
    var r1 = builder.buildRoom()
    var r2 = builder.buildRoom()
    builder.buildDoor(r1, Direction.East, r2, Direction.West);
    return builder.getMaze();
  }

  public createBiggerMaze(builder: MazeBuilder): Maze {
    builder.buildMaze();
    var r1 = builder.buildRoom()
    var r2 = builder.buildRoom()
    var r3 = builder.buildRoom()
    var r4 = builder.buildRoom()
    var r5 = builder.buildRoom()
    builder.buildDoor(r5, Direction.North, r1, Direction.South);
    builder.buildDoor(r5, Direction.South, r2, Direction.North);
    builder.buildDoor(r5, Direction.East, r3, Direction.West);
    builder.buildDoor(r5, Direction.West, r4, Direction.East);  
    return builder.getMaze();  
  }
}

export default MazeGame