import Room from './room'

class Maze {
  constructor() {
    console.log("Creating a maze (original version)..")
  }
  public addRoom(room: Room): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
  private rooms: Set<Room> = new Set<Room>();
}

export default Maze