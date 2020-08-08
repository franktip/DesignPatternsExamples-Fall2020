import Room from "./room";
import PlainMazeFactory from "./plainmazefactory";

class ExplodingRoom extends Room {
  constructor(public hasBomb: boolean) {
    super();
  }
  public explode(): void { }
  public toString(): string {
    return 'ExplodingRoom #' + this.roomID + ' (hasBomb = ' + this.hasBomb + ')'
  }
}

class ExplodingRoomFactory extends PlainMazeFactory {
  private roomCounter: number = 0
  public makeRoom(): ExplodingRoom {
    this.roomCounter++;
    // put a bomb in every other room
    return new ExplodingRoom((this.roomCounter % 2) == 0)
  }
}

export { ExplodingRoom, ExplodingRoomFactory }