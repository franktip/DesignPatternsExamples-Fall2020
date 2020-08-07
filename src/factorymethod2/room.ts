import Direction from "./direction";
import IMazeElement from "./imazeelement";

class Room implements IMazeElement {
  public static roomCounter: number = 1;
  protected roomID: number;
  private northSide: IMazeElement;
  private southSide: IMazeElement;
  private eastSide: IMazeElement;
  private westSide: IMazeElement;

  constructor() { 
    this.roomID = Room.roomCounter++;
    console.log("creating Room #" + this.roomID)
  }
  enter(): void { }
  public setSide(d: Direction, site: IMazeElement) {
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

  public getSide(d: Direction): IMazeElement {
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
    return "Room #" + this.roomID;
  }
}

export default Room