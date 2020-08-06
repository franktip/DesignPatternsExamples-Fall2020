import MazeGame from "./mazegame";
import StandardMazeBuilder from "./standardmazebuilder";

var mazeBuilder = new StandardMazeBuilder();
var game = new MazeGame();
var maze = game.createBiggerMaze(mazeBuilder);