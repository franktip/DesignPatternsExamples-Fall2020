import Room from "./room";

import MapSite from './mapsite'

class Door extends MapSite {
  constructor(r1: Room, r2: Room) {
    super();
    this.room1 = r1;
    this.room2 = r2;
    this.doorNr = Door.doorCnt++;
    console.log("creating Door#" + this.doorNr + " between " + r1 + " and " + r2);
  }
  public toString(): string {
    return "Door#" + this.doorNr;
  }
  
  private static doorCnt: number = 1;
  private doorNr: number;
  private room1: Room;
  private room2: Room;
}

export default Door