import Room from "./room";

import MapSite from './mapsite'

class Door extends MapSite {
  constructor(r1: Room, r2: Room) {
    super();
    this.room1 = r1;
    this.room2 = r2;
    this.doorNr = Door.doorCnt++;
  }
  public toString(): string {
    return "Door#" + this.doorNr;
  }

  public clone() : Door {
    return new Door(this.room1, this.room2);
  }
  public initialize(r1: Room, r2: Room): void {
    this.room1 = r1;
    this.room2 = r2;
    console.log("initializing Door#" + 
                this.doorNr + " between " + 
                r1 + " and " + r2);
  }
  
  private static doorCnt: number = 1;
  protected doorNr: number;
  protected room1: Room;
  protected room2: Room;
}

export default Door