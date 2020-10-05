import createMaze from "./createmaze";
import PlainMazeFactory from "./plainmazefactory";

let factory = PlainMazeFactory.instance()
createMaze(factory);