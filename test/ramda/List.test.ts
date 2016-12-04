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

  describe('all', () => {
    it('should return true if all elements of the list match the predicate', () => {
      let isPositive = (a: number) => a >= 0;
      let positiveArray: number[] = [1, 6, 4, 2];
      let notPositiveArray: number[] = [1, 6, -4, 2];
      expect(R.all(isPositive, positiveArray)).is.true;
      expect(R.all(isPositive, notPositiveArray)).is.false;
    });
  });

});
