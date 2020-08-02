import Room from './room'

class Maze {
  constructor() {
    console.log("Creating a maze (prototype version)..")
  }
  public addRoom(room: Room): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
  // should restrict to empty mazes
  public clone() : Maze {
     var maze : Maze = new Maze();
     maze.rooms = this.rooms;
     return maze;
  }
  private rooms: Set<Room> = new Set<Room>();
}

export default Maze