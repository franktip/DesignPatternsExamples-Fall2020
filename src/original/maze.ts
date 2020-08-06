import {IRoom} from './room' 

export interface  IMaze {
  addRoom(room: IRoom): void
}
export class Maze implements IMaze {

  private rooms: Set<IRoom> = new Set<IRoom>();

  constructor() {
    console.log("Creating a maze (original version)..")
  }

  public addRoom(room: IRoom): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }
 
}

// we use both Maze and IMaze, so can't use export default here.
