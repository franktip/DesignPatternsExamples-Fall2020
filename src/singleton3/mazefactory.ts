import Maze from "./maze"
import Wall from "./wall";
import Room from "./room";
import Door from "./door";

// not exported, therefore not accessible outside the module
var nrObjectsCreated = 0;

export function makeMaze(){ nrObjectsCreated++; return new Maze(); }
export function makeWall(){ nrObjectsCreated++; return new Wall(); }
export function makeRoom(){ nrObjectsCreated++; return new Room(); }
export function makeDoor(r1: Room, r2: Room){ nrObjectsCreated++; return new Door(r1, r2); }

export function getNrObjects(){ return nrObjectsCreated; }

