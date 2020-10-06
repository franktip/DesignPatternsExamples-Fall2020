import Maze from "./maze"
import Wall from "./wall";
import Room from "./room";
import Door from "./door";


const mazeFactory = {
  makeMaze : () =>  { return new Maze(); },
  makeWall : () => { return new Wall(); },
  makeRoom : () => { return new Room(); },
  makeDoor : (r1: Room, r2: Room) => { return new Door(r1, r2); }
}

export default mazeFactory