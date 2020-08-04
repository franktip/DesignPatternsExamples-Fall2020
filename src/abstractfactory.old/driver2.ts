import MazeGame from "./mazegame";
import MazeFactory from "./mazefactory"
import EnchantedMazeFactory from "./enchantedmazefactory";

var factory = new EnchantedMazeFactory();
var game = new MazeGame();
game.createMaze(factory);