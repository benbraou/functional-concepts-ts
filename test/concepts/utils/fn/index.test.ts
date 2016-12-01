import * as chai from "chai";
const expect = chai.expect;

import { compose } from '../../../../src/concepts/utils/fn';

describe('compose()', () => {
  it('should return "HELLO" when composing trim and capitalize giving an input "   hello   "', () => {
    let msg = '   hello   ';
    let trim = (str: string) => str.trim();
    let capitalize = (str: string) => str.toUpperCase();
    expect(compose(trim, capitalize)(msg)).to.equal('HELLO');
  });
});