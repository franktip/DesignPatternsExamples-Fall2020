import {IRoom} from "./room";
import {IMazeElement} from './mazeelement'

export class Door implements IMazeElement {

  private static doorCounter: number = 1;
  private doorID: number;

  constructor(
    private room1: IRoom,
    private room2: IRoom) {
    this.doorID = Door.doorCounter++;
    console.log(
      "creating Door #" + this.doorID + " between Rooms " + room1.getID() + " and " + room2.getID());
  }

  public toString(): string {
    return "Door #" + this.doorID;
  }

  public enter(): void { }

}
