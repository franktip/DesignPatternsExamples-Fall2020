import { IRoom } from "./room";
import MazeElement from './interfaces'

export class Door implements MazeElement {

  private static doorCounter: number = 1;
  private doorID: number;
  // private room1: Room;  // declared in constructor
  // private room2: Room;

  constructor(
    private room1: IRoom,
    private room2: IRoom) {
    //this.room1 = r1;  // automatically inserted
    //this.room2 = r2;
    this.doorID = Door.doorCounter++;
    console.log(
      "creating Door #" + this.doorID + " between Rooms " + room1.getID() + " and " + room2.getID());
  }

  public toString(): string {
    return "Door #" + this.doorID;
  }

  public enter(): void { }


}

export default Door