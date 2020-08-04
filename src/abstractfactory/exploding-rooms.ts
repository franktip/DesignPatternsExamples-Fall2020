// exploding rooms, all in one place
import { PlainRoom } from './room'
import { PlainMazeElementFactory} from './factory'

// exploding room, also implements interface Room
export class ExplodingRoom extends PlainRoom {
  constructor (public hasBomb : boolean) {
    super();
  }
    public explode(): void { }
    public toString(): string {
      return 'ExplodingRoom #' + this.roomID + ' (hasBomb = ' + this.hasBomb + ')'
    }
  }
  
// factory for exploding rooms
export class ExplodingMazeElementFactory extends PlainMazeElementFactory {
  private roomCounter : number = 0
  public makeRoom(): ExplodingRoom { 
    this.roomCounter++;
    // put a bomb in every other room
    return new ExplodingRoom((this.roomCounter % 2) == 0) }
}

// try out the factory
// new ExplodingMazeElementFactory().makeRoom().explode  //this works...
  