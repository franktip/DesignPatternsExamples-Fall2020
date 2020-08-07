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

class ExplodingMazeGame extends MazeGame {
  public makeRoom(): ExplodingRoom {
    Room.roomCounter++;
    // put a bomb in every other room
    return new ExplodingRoom((Room.roomCounter % 2) == 0)
  }
}

export { ExplodingRoom, ExplodingMazeGame }