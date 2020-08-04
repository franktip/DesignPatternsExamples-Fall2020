import Room from './room' 

export interface  Maze {
  addRoom(room: Room): void
}
export class Maze implements Maze {

  private rooms: Set<Room> = new Set<Room>();

  constructor() {
    console.log("Creating a maze (original version)..")
  }

  public addRoom(room: Room): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
 
}

export default Maze