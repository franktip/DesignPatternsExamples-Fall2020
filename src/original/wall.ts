import {IMazeElement} from "./mazeelement";

export class Wall implements IMazeElement {
  
  private static wallCounter: number = 1;
  private wallID: number;

  constructor() {
    this.wallID = Wall.wallCounter++;
    console.log("creating Wall #" + this.wallID)
  }
  
  public toString(): string {
    return "Wall #" + this.wallID;
  }

  public enter () : void {}

}

