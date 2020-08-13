import MazeGame from "./mazegame";
import Room from "./room";

class ExplodingRoom extends Room {
  constructor(public hasBomb: boolean) {
    super();
  }
  public explode(): void { }
  public toString(): string {
    return 'ExplodingRoom #' + this.roomID +
           ' (hasBomb = ' + this.hasBomb + ')'
  }
}

export default ExplodingRoom