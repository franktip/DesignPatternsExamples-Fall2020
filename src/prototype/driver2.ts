import MazeGame from "./mazegame";
import MazePrototypeFactory from "./mazeprototypefactory";
import Maze from "./maze"; 
import Wall from "./wall"; 
import EnchantedRoom from "./enchantedroom";
import Spell from "./spell";
import DoorNeedingSpell from "./doorneedingspell";

var mazeProto = new Maze();
var wallProto = new Wall();
var roomProto = new EnchantedRoom(new Spell());
var doorProto = new DoorNeedingSpell(roomProto, roomProto);

var factory = new MazePrototypeFactory(mazeProto, wallProto, 
                                       roomProto, doorProto);
var game = new MazeGame();
game.createMaze(factory);