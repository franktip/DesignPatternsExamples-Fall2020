// interfaces
import Direction from './direction'

export interface  Maze {
    addRoom(room: Room): void
  }

export interface MazeElement
 {
  enter() : void
}

export interface Room extends MazeElement {
    setSide(d: Direction, element: MazeElement) : void
    getSide(d: Direction): MazeElement
    toString(): string
  }
  
  // export default MazeElement