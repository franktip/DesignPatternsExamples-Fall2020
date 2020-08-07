import Room from "./room";
import IMazeElement from "./imazeelement";

class Door implements IMazeElement {
  private static doorCounter: number = 1;
  private doorID: number;
  constructor(private room1: Room, private room2: Room) { 
    this.doorID = Door.doorCounter++;
    console.log("creating Door#" + this.doorID + " between " + 
                room1 + " and " + room2);
  }
  enter(): void { }
  public toString(): string {
    return "Door#" + this.doorID;
  }
}

export default Door