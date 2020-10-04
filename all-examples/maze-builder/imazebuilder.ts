import Maze from "./maze";
import Direction from "./direction";
import Room from "./room";

interface IMazeBuilder { 
  buildMaze() : void  
  buildRoom() : Room 
  buildDoor(roomFrom: Room, sideFrom: Direction,
            roomTo: Room, sideTo: Direction) : void  
  getMaze() : Maze  
}

export default IMazeBuilder