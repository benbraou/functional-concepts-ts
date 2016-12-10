// Using class setters
class Planet {
  _name: string;
  _satellitesNumber: number;
  constructor(name: string, satellitesNumber: number) {
    this._name = name;
    this._satellitesNumber = satellitesNumber;
  }
  get name() {
    return this._name;
  }
  get satellitesNumber() {
    return this._satellitesNumber;
  }
  //set name(name:string){
  //return new Planet(name,this._satellitesNumber);
  //}
}


// Using ramda lensProp - check lenses.test.ts file

export class Apppartment {
  surfaceInSquareMeters: number;
  roomsNumber: number;

  constructor(surfaceInSquareMeters: number, roomsNumber: number) {
    this.surfaceInSquareMeters = surfaceInSquareMeters;
    this.roomsNumber = roomsNumber;
  }
}



