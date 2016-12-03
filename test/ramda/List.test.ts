import * as R from "ramda";
import * as chai from "chai";
const expect = chai.expect;

describe('Ramda List functions', () => {
  describe('adjust', () => {
    it('should apply a function to an array at a given index', () => {
      let add = (a: number) => (b: number) => a + b;
      let inputArray: number[] = [1, 6, 4, 2];
      let outputArray = R.adjust(add(10), 1, inputArray);
      let expectedArray = [1, 16, 4, 2];
      expect(outputArray).to.deep.equal(expectedArray);
      expect(inputArray).to.deep.equal([1, 6, 4, 2]);
    });
  });
});
