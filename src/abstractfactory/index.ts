import {makeMaze} from "./client";
import * as factories from './factory'

// actually build a maze
console.log('======');
console.log('building a plain maze');
makeMaze(new factories.PlainMazeElementFactory());
console.log('finished building plain maze')
console.log('======');
console.log('')

console.log('=======')
console.log('building exploding maze')
makeMaze(new factories.ExplodingMazeElementFactory());
console.log('finished building exploding maze')
console.log('=======')

// can we make an exploding room explode?   Yes
// new factories.ExplodingMazeElementFactory().makeRoom().explode

// can we make a plan room explode?   NO: this is flagged as a type error.
// new factories.PlainMazeElementFactory().makeRoom().explode