// wall.ts

import Ball from './ball'

class Wall {

    private observers: Ball[] = []

    constructor(
        public position: number // position of the wall
    ) { }

    setPos(newPos: number) {
        this.position = newPos;
        this.notifyAll();
    }

    register(b: Ball) { this.observers.push(b) }

    notifyAll() {
        this.observers.forEach((b) => b.onWallMove(this.position))
    }
}

export default Wall
