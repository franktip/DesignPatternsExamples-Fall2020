import MazeGame from "./mazegame";
import MazeFactory from "./mazefactory"

var factory = MazeFactory.instance();
var game = new MazeGame();
game.createMaze(factory);