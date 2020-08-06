import MapSite from "./mapsite";

class Wall extends MapSite {
  constructor() {
    super();
    this.wallNr = Wall.wallCnt++;
    console.log("creating Wall#" + this.wallNr)
  }
  public toString(): string {
    return "Wall#" + this.wallNr;
  }

  private static wallCnt: number = 1;
  private wallNr: number;
}

export default Wall