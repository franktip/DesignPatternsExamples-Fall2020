import MazeGame from "./mazegame";
import MazePrototypeFactory from "./mazeprototypefactory";
import Maze from "./maze";
import Door from "./door";
import Wall from "./wall";
import Room from "./room";

var mazeProto = new Maze();
var wallProto = new Wall();
var roomProto = new Room();
var doorProto = new Door(roomProto, roomProto);

var factory = new MazePrototypeFactory(mazeProto, wallProto, 
                                       roomProto, doorProto);
var game = new MazeGame();
game.createMaze(factory);