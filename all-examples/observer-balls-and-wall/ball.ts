// ball.ts

import Wall from "./wall"
import Clock from "./clock"

class Ball {

    private wallPos: number  // local copy of the x-position of the wall

    constructor(
        private w: Wall,    // the wall we expect to hear from
        private c: Clock,   // the clock we expect to hear from
        public ballPos: number,  // the x-position of the ball
        public velocity: number,   // the velocity of the ball

    ) {
        // register this Ball with the clock and the wall, 
        // and initialize the local copy of the wall position
        c.register(this);
        w.register(this);
        this.wallPos = w.position
    }

    // INVARIANT: 0 <= pos <= wallpos

    // what to do when a tick is received:
    // move the ball, but don't let it get outside the invariant
    // if the ball would go past [0,wallpos], place it at the boundary 
    // and reverse its direction.
    onTick() {
        let tentativePosition = this.ballPos + this.velocity
        // if tentative position would go outside limits, then reverse velocity
        if (!((0 <= tentativePosition) && (tentativePosition <= this.wallPos))) {
            this.velocity = - this.velocity
        };
        // the min and max guard the assignment to guarantee the invariant
        // either take the tentative position or pin it to 0 or the wall.
        this.ballPos = Math.max(0, Math.min(tentativePosition, this.wallPos))
    }

    // what to do when notice of a wall move is received:
    // update the local copy of the wall position
    onWallMove(newpos: number) {
        this.wallPos = newpos
    }
}

export default Ball