import { IRoom } from './room'

export interface Maze {
  addRoom(room: IRoom): void
}
export class Maze implements Maze {

  private rooms: Set<IRoom> = new Set<IRoom>();

  public addRoom(room: IRoom): void {
    if (!this.rooms.has(room)) {
      this.rooms.add(room)
    }
  }

}

