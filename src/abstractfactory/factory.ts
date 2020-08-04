// factory.ts
// defines PlainMazeFactory

import { Room, PlainRoom } from "./room"
import Wall from "./wall"
import Door from './door'

export interface MazeElementFactory {
    makeRoom(): Room
    makeWall(): Wall
    makeDoor(room1: Room, room2: Room): Door
}

export class PlainMazeElementFactory implements MazeElementFactory {
    public makeRoom(): Room { return new PlainRoom() }
    public makeWall(): Wall { return new Wall() }
    public makeDoor(room1: Room, room2: Room): Door { return new Door(room1, room2) }
}



