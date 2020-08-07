import createMaze from "./createmaze";
import { ExplodingRoomFactory } from "./exploding";

let factory = new ExplodingRoomFactory()
createMaze(factory);