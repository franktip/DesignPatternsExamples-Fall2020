import IMazeElement from "./imazeelement";

class Wall implements IMazeElement {
  private static wallCounter: number = 1;
  private wallID: number;
  constructor() { 
    this.wallID = Wall.wallCounter++;
    console.log("creating Wall #" + this.wallID)
  }
  public enter(): void { }
  public toString(): string {
    return "Wall #" + this.wallID;
  }
}

export default Wall