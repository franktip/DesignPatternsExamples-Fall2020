import createMaze from "./createmaze";
import Maze from "./maze";
import Wall from "./wall";
import Room from "./room";
import Door from "./door";
import MazePrototypeFactory from "./mazeprototypefactory";

let mazeProto = new Maze();
let wallProto = new Wall();
let roomProto = new Room();
let doorProto = new Door(roomProto, roomProto);

let factory = new MazePrototypeFactory(mazeProto, wallProto, 
                                       roomProto, doorProto);
let game = createMaze(factory);