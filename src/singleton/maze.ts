import Room from './room'

class Maze {
  private rooms: Set<Room> = new Set<Room>();
  constructor() {
    console.log("Creating a maze (Singleton version)..")
  }
  public addRoom(room: Room): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
}

export default Maze