import * as chai from "chai";
const expect = chai.expect;
import { immutableSort, mutableSort } from '../../src/concepts/immutability';

describe('Functional programming is about immutability.', () => {
  describe('Immutable sort', () => {
    it('should keep unchanged after sort an input array [5, 1, 9, 7]', () => {
      let inputArray = [5, 1, 9, 7];
      let expectedOutputArray = [1, 5, 7, 9];
      let expectedInputArrayAfterSort = [1, 5, 7, 9];
      let outputArray = immutableSort(inputArray);

      expect(immutableSort(outputArray)).to.deep.equal(expectedOutputArray);
      expect(immutableSort(inputArray)).to.deep.equal(expectedInputArrayAfterSort);
    });
  });

  describe('Mutable sort', () => {
    it('should mutate an input array [5, 1, 9, 7] after sort to become [1, 5, 7, 9]', () => {
      let inputArray = [5, 1, 9, 7];
      let expectedOutputArray = [1, 5, 7, 9];
      let expectedInputArrayAfterSort = [1, 5, 7, 9];
      let outputArray = mutableSort(inputArray);

      expect(mutableSort(outputArray)).to.deep.equal(expectedOutputArray);
      expect(mutableSort(inputArray)).to.deep.equal(expectedInputArrayAfterSort);
    });
  });
});
