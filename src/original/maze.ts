import * as interfaces from './interfaces'

export class Maze implements interfaces.Maze {

  private rooms: Set<interfaces.Room> = new Set<interfaces.Room>();

  constructor() {
    console.log("Creating a maze (original version)..")
  }

  public addRoom(room: interfaces.Room): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
 
}

export default Maze