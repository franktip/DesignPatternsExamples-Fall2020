import Maze from './maze' 
import Direction from './direction'; 
import IMazeBuilder from './imazebuilder';

function createMaze(builder: IMazeBuilder): Maze {
  builder.buildMaze();
  let r1 = builder.buildRoom()
  let r2 = builder.buildRoom()
  builder.buildDoor(r1, Direction.East, r2, Direction.West);
  return builder.getMaze();
}

function createBiggerMaze(builder: IMazeBuilder): Maze {
  builder.buildMaze();
  let r1 = builder.buildRoom()
  let r2 = builder.buildRoom()
  let r3 = builder.buildRoom()
  let r4 = builder.buildRoom()
  let r5 = builder.buildRoom()
  builder.buildDoor(r5, Direction.North, r1, Direction.South);
  builder.buildDoor(r5, Direction.South, r2, Direction.North);
  builder.buildDoor(r5, Direction.East, r3, Direction.West);
  builder.buildDoor(r5, Direction.West, r4, Direction.East);  
  return builder.getMaze();  
}


export {createMaze,createBiggerMaze}