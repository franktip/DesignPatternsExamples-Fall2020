import {makeMaze} from "./client";
import {PlainMazeElementFactory} from './factory'
import {ExplodingRoomFactory1,ExplodingRoomFactory2} from './exploding-rooms'
    
// What if we wanted to build some _different_ mazes?
// if we want to alter the number of rooms, how they are connected, etc.,
// then we don't have any choice except to alter makeMaze.

// what if we wanted to build a maze from some different kind of room?
// In this example, we will use the Abstract Factory pattern to organize
// our code so that we can create a new kind of room without making changes
// that are scattered throughout the code.

// In this example, the new kind of room is an Exploding Room, that may
// or may not contain a bomb.  As you read the code, observe that *all*
// of the code pertaining to Exploding Rooms is localized in one place:
// explodingroom.ts


// actually build some mazes
console.log('======');
console.log('building a plain maze');
makeMaze(new PlainMazeElementFactory());
console.log('finished building plain maze')
console.log('======');
console.log('')

console.log('=======')
console.log('building maze with ExplodingRoomFactory1')
makeMaze(new ExplodingRoomFactory1());
console.log('finished building exploding maze with Factory1')
console.log('=======')
console.log('')

console.log('=======')
console.log('building maze with ExplodingRoomFactory2')
makeMaze(new ExplodingRoomFactory2());
console.log('finished building exploding maze with Factory2')
console.log('=======')
console.log('')

// exercise: write a function that avoids the duplicated code 
// in this file