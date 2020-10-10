import {assert} from 'chai';
import Clock from './clock';


describe('test clock', function () {

    it('test initial value', () => {
        let c = new Clock()
        assert.equal(c.time,0)
    })

    it('test increment time', () => {
        let c = new Clock()
        c.tick();
        assert.equal(c.time, 1)
        c.tick();
        assert.equal(c.time, 2)
    })

    it('test advance time', () => {
        let c = new Clock();
        assert.equal(c.time,0,"initial time should be 0");
        c.advance(10);
        assert.equal(c.time,10,"after advance(10), time should be 10")
    })

})
