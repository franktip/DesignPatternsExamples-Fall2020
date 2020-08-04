import {makeMaze} from "./client";
import {PlainMazeElementFactory} from './factory'
import {ExplodingMazeElementFactory} from './exploding-rooms'

// actually build some mazes
console.log('======');
console.log('building a plain maze');
makeMaze(new PlainMazeElementFactory());
console.log('finished building plain maze')
console.log('======');
console.log('')

console.log('=======')
console.log('building exploding maze')
makeMaze(new ExplodingMazeElementFactory());
console.log('finished building exploding maze')
console.log('=======')

// can we make an exploding room explode?   Yes
// new factories.ExplodingMazeElementFactory().makeRoom().explode

// can we make a plan room explode?   NO: this is flagged as a type error.
// new factories.PlainMazeElementFactory().makeRoom().explode