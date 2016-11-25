import * as chai from "chai";
const expect = chai.expect;

import { iAmAPureIncrementer } from '../../src/concepts/referential-transparency';

describe('Test referential transparency of a pure function', () => {
  it('should not update variables that are not in function scope', () => {
    let counter = 4;
    expect(iAmAPureIncrementer(counter)).to.equal(5);
    expect(counter).to.equal(4);
  });
});
