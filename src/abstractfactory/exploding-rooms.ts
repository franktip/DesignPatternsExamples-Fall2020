// exploding rooms, all in one place
import { PlainRoom } from './room'
import { PlainMazeElementFactory } from './factory'
import { IMazeElementFactory } from './factory'
import { Wall } from './wall'
import { IRoom } from './room'
import { Door } from './door'

// exploding room, also implements interface Room
export class ExplodingRoom extends PlainRoom {
  constructor(public hasBomb: boolean) {
    super();
  }
  public explode(): void { }
  public toString(): string {
    return 'ExplodingRoom #' + this.roomID + ' (hasBomb = ' + this.hasBomb + ')'
  }
}

// factory for exploding rooms.  This factory puts a bomb in every other room,
// but some other factory might do it differently-- the decision about which
// rooms get bombs is a property of the factory, not of the rooms. 

// version 1:  build it from scratch
export class ExplodingRoomFactory1 implements IMazeElementFactory {
   // put a bomb in every other room
  private roomCounter: number = 0
  public makeRoom(): ExplodingRoom {
    this.roomCounter++;
    return new ExplodingRoom((this.roomCounter % 2) == 0)
  }
  public makeWall(): Wall { return new Wall() }
  public makeDoor(room1: IRoom, room2: IRoom): Door { return new Door(room1, room2) }
}

// But this shares a lot of behavior with the first factory (PlainMazeElementFactory),
// so we can use inheritance to avoid reimplementing the other methods.

// It doesn't make much difference here, but if there were a lot of other methods
// it would be a big help.  

// The use of inheritance here is not an essential part of the Abstract Factory pattern.  
// However, it will often be the case that one factory is only a minor variant of an earlier one, 
// so inheritance will often turn out to be useful in conjunction with the Abstract Factory
// pattern

export class ExplodingRoomFactory2 extends PlainMazeElementFactory {
  private roomCounter: number = 0
  public makeRoom(): ExplodingRoom {
    this.roomCounter++;
    // put a bomb in every other room
    return new ExplodingRoom((this.roomCounter % 2) == 0)
  }
}


