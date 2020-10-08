// ball.spec.ts
import { assert } from 'chai'
import Wall from "./wall"
import Clock from './clock'
import Ball from './ball'

function ballState (b:Ball) : number[] {
    return [b.ballPos, b.velocity]
}

describe('tests of ball', function () {

    it('test unencumbered motion', () => {
        let w = new Wall(100)
        let c = new Clock()
        let b = new Ball(w,c,20,5)
        assert.equal(b.ballPos,20)
        assert.equal(b.velocity,5)
        c.tick()
        // did the ball move?
        assert.equal(b.ballPos,25)
        assert.equal(b.velocity,5)
        assert.deepEqual(ballState(b), [25,5])
    })

    it('test hitting wall', () => {
        let w = new Wall(100)
        let c = new Clock()
        let b = new Ball(w, c, 99, 5)
        c.tick()
        // ball should be at the wall, going to the left
        assert.deepEqual(ballState(b), [100, -5])
    })

    it('test hitting left wall', () => {
        let w = new Wall(100)
        let c = new Clock()
        let b = new Ball(w, c, 5, -10)
        c.tick()
        // ball should be at the left wall, going to the right
        assert.deepEqual(ballState(b), [0, 10])
    })

    it('test hitting wall', () => {
        let w = new Wall(200)
        let c = new Clock()
        let b = new Ball(w, c, 90, 6)
        c.tick()
        // move the wall to 100
        w.setPos(100)
        // on the next tick, the ball should hit the wall in its new position
        c.tick()
        assert.deepEqual(ballState(b), [100, -6])
    })

    it('test clock broadcast', () => {
        let w = new Wall(100)
        let c = new Clock()
        let b1 = new Ball(w, c, 50, 5)
        let b2 = new Ball(w, c, 60, 6)
        c.tick();
        assert.deepEqual(ballState(b1), [55, 5])
        assert.deepEqual(ballState(b2), [66, 6])
    })
    
    it('test wall broadcast', () => {
        let w = new Wall(100)
        let c = new Clock()
        let b1 = new Ball(w, c, 50, 5)
        let b2 = new Ball(w, c, 60, 6)
        w.setPos(200)
        assert.equal(b1.wallPos,200)
        assert.equal(b2.wallPos,200)
    })
    

   

})