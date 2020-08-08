import Direction from "./direction";
import IMazeElement from "./imazeelement";

class Room implements IMazeElement {
  private static roomCounter: number = 1;
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
        this.northSide = element;
        break;
      case Direction.South:
        this.southSide = element;
        break;
      case Direction.East:
        this.eastSide = element;
        break
      case Direction.West:
        this.westSide = element;
    }
    console.log("setting " + d +
      " side of " +
      this.toString() +
      " to " +
      element.toString());
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


