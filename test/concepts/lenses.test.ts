import * as chai from "chai";
const expect = chai.expect;
import * as R from 'ramda';
import { Apppartment } from '../../src/concepts/lenses';

describe('Lenses using Ramda', () => {
  describe('lensProp & set example', () => {
    it('should keep unchanged the original object after using ramda.set', () => {
      let app = new Apppartment(40, 2);
      expect(app.roomsNumber).to.equal(2);
      // creates a lens that will focus on the property _roomsNumber 
      let roomsNumberLens = R.lensProp('roomsNumber');
      let roomsNumber = R.view(roomsNumberLens, app);
      let moreRoomsApp = R.set(roomsNumberLens, 3, app);
      expect(app.roomsNumber).to.equal(2);
      expect(moreRoomsApp.roomsNumber).to.equal(3);
    });
  });

});
