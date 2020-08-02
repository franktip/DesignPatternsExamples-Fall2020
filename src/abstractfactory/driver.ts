import MazeGame from "./mazegame";
import MazeFactory from "./mazefactory"

var factory = new MazeFactory();
var game = new MazeGame();
game.createMaze(factory);