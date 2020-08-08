import {createMaze,createBiggerMaze} from "./createmaze";
import StandardMazeBuilder from "./standardmazebuilder";

// create a small maze
let mazeBuilder = new StandardMazeBuilder();
let maze = createMaze(mazeBuilder);

// now create a bigger maze
let biggerMaze = createBiggerMaze(mazeBuilder);
