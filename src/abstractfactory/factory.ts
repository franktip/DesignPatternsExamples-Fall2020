// factory.ts
// defines PlainMazeFactory and ExplodingMazeFactory

import { Room, PlainRoom, ExplodingRoom } from "./room"
import Wall from "./wall"
import Door from './door'

export interface MazeFactory {
    makeRoom(): Room
    makeWall(): Wall
    makeDoor(room1: Room, room2: Room): Door
}

/// this should be Maze_*Element*_Factory
export class PlainMazeFactory {
    public makeRoom(): Room { return new PlainRoom() }
    public makeWall(): Wall { return new Wall() }
    public makeDoor(room1: Room, room2: Room): Door { return new Door(room1, room2) }
}

export class ExplodingMazeFactory extends PlainMazeFactory {
    private roomCounter: number = 0
    public makeRoom(): Room {
        this.roomCounter++;
        return (this.roomCounter % 3 == 0) ? new PlainRoom() : new ExplodingRoom()
    }
}
