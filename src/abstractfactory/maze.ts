import {IRoom} from './room' 

export interface  IMaze {
  addRoom(room: IRoom): void
}
export class Maze implements IMaze {

  private rooms: Set<IRoom> = new Set<IRoom>();

  constructor() {
    console.log("Creating a maze (abstract factory version)..")
  }

  public addRoom(room: IRoom): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }

}

