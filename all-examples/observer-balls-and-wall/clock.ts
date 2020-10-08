// clock.ts
import Ball from './ball'

class Clock {
    private observers: Ball[] = []
    public time: number = 0

    public register (b:Ball) { this.observers.push(b) }

    private notifyAll(): void {
        this.observers.forEach((b) => b.onTick())
    }

    public tick(): void {
        this.time++;
        // console.log(`clocktime= ${this.time}`)
        this.notifyAll();
    }

    public advance(n: number): void {
        if (n <= 0) { }
        else {
            this.tick();
            this.advance(n - 1)
        }
    }

    public toString () : string {
        return "Clock time = " + this.time
    }
}

export default Clock