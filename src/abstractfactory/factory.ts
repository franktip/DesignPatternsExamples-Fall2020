// factory.ts
// defines PlainMazeFactory

import { IRoom, PlainRoom } from "./room"
import Wall from "./wall"
import Door from './door'

export interface IMazeElementFactory {
    makeRoom(): IRoom
    makeWall(): Wall
    makeDoor(room1: IRoom, room2: IRoom): Door
}

export class PlainMazeElementFactory implements IMazeElementFactory {
    public makeRoom(): IRoom { return new PlainRoom() }
    public makeWall(): Wall { return new Wall() }
    public makeDoor(room1: IRoom, room2: IRoom): Door { return new Door(room1, room2) }
}



