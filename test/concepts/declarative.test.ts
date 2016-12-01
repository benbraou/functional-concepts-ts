import * as chai from "chai";
const expect = chai.expect;

import { declarativeSum, imperativeSum } from '../../src/concepts/declarative';

describe('Functional programming is declarative', () => {
  describe('Array declarative sum', () => {
    it('should return 0 as a sum of empty array', () => {
      expect(declarativeSum([])).to.equal(0);
    });
    it('should return 18 as a sum of three element array[1,8,9]', () => {
      expect(declarativeSum([1, 8, 9])).to.equal(18);
    });
  });

  describe('Array imperative sum', () => {
    it('should return 0 as a sum of empty array', () => {
      expect(imperativeSum([])).to.equal(0);
    });
    it('should return 18 as a sum of three element array[1,8,9]', () => {
      expect(imperativeSum([1, 8, 9])).to.equal(18);
    });
  });
});
