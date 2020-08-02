import Direction from "./direction";
import MapSite from "./mapsite";

class Room extends MapSite {
  constructor() {
    super();
    this.roomNr = Room.roomCnt++;
    console.log("creating Room#" + this.roomNr)
  }
  public setSide(d: Direction, site: MapSite) {
    switch (d) {
      case Direction.North:
        this.northSide = site;
        break;
      case Direction.South:
        this.southSide = site;
        break;
      case Direction.East:
        this.eastSide = site;
        break
      case Direction.West:
        this.westSide = site;
    }
    console.log("setting " + d + 
                " side of " +
                this.toString() + 
                " to " + 
                site.toString());
  }

  public getSide(d: Direction): MapSite {
    switch (d) {
      case Direction.North:
        return this.northSide;
      case Direction.South:
        return this.southSide;
      case Direction.East:
        return this.eastSide;
      case Direction.West:
        return this.westSide;
    }
  }
  public toString(): string {
    return "Room#" + this.roomNr;
  }
  public clone() : Room {
    var room = new Room();
    room.northSide = this.northSide;
    room.southSide = this.southSide;
    room.eastSide = this.eastSide;
    room.westSide = this.westSide;
    return room;
  }
  private static roomCnt: number = 1;
  private roomNr: number;
  protected northSide: MapSite;
  protected southSide: MapSite;
  protected eastSide: MapSite;
  protected westSide: MapSite;
}

export default Room