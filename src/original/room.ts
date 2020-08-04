import Direction from "./direction";
import MazeElement from "./interfaces";

export interface Room extends MazeElement {
  setSide(d: Direction, element: MazeElement) : void
  getSide(d: Direction): MazeElement
  toString(): string
}

export class PlainRoom implements Room {

  private static roomCounter: number = 1;
  private roomID: number;
  // these should each be Wall or Door.  
  // Puzzle: can you redo the types to ensure this property?
  private northSide: MazeElement;  
  private southSide: MazeElement;
  private eastSide:  MazeElement;
  private westSide:  MazeElement;

  constructor() {
    this.roomID = PlainRoom.roomCounter++;  
    console.log("creating PlainRoom#" + this.roomID)
  }
  public setSide(d: Direction, element: MazeElement) {
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

  public getSide(d: Direction): MazeElement {
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
    return "PlainRoom#" + this.roomID;
  }

  public enter () : void {}


}

export default Room