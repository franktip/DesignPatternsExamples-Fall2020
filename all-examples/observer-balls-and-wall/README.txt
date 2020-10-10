This is a small simulation of a list of balls bouncing
along the x-axis, between 0 and a moveable wall.

Each ball is modeled as a point, and has some initial 
velocity.  At every tick of the clock, the ball moves forward
by its velocity.  However, if the ball hits either the wall
or the limit x=0, the ball stops at the limit and reverses
its velocity.

The wall starts at some position on the x-axis, and is moveable using
the setPos method.

Each ball is in two Observer relationships:

1. The ball is notified every time the clock ticks.
2. The ball is notified whenever the wall moves.

Note: the ball knows its wall, so it could in principle just
ask the wall for its position at every tick, but we imagine that
the wall moves relatively rarely, so it is much more efficient
for the ball to keep a local copy of the wall's position, and
update it when the wall moves.

You should read the tests in ball.spec.ts carefully-- they illustrate
how to test objects with state.