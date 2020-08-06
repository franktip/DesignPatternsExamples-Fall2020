import Direction from "./direction";
import {IMazeElement} from "./mazeelement";

export interface IRoom extends IMazeElement {
  getID () : number
  setSide(d: Direction, element: IMazeElement): void
  getSide(d: Direction): IMazeElement
  toString(): string
}

export class PlainRoom implements IRoom {

  private static roomCounter: number = 1;
  private roomID: number;
  // these should each be Wall or Door.  
  // Puzzle: can you redo the types to ensure this property?
  private northSide: IMazeElement;  
  private southSide: IMazeElement;
  private eastSide:  IMazeElement;
  private westSide:  IMazeElement;

  constructor() {
    this.roomID = PlainRoom.roomCounter++;  
    console.log("creating PlainRoom #" + this.roomID)
  }

  public getID () : number {return this.roomID}
  public setSide(d: Direction, element: IMazeElement) {
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
    return "PlainRoom #" + this.roomID;
  }

  public enter () : void {}


}


