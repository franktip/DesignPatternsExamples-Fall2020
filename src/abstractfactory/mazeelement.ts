// a maze element is something you can enter
// currently, a room, a door, or a wall
// don't try to enter a wall!

export interface IMazeElement
 {
  enter() : void
}