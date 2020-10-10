// wall.spec.ts
import { assert } from 'chai'
import Wall from "./wall"

describe('test wall', function () {

    it('test initial position', () => {
        let w = new Wall(100)
        assert.equal(w.position,100)
    })

    it('test setPos', () => {
        let w = new Wall(100)
        w.setPos(50)
        assert.equal(w.position,50)
    })

})