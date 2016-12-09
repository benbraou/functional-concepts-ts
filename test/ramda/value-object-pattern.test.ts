import * as chai from "chai";
const expect = chai.expect;
import currency from '../../src/concepts/value-object-pattern';

describe('Value Object pattern', () => {
  describe('Protection against mutations through encapsulation', () => {

    it('should prorect currency code against mutation', () => {
      let eur = currency('EUR', 'EURO');
      expect(eur.code()).to.equal('EUR');
      eur["_code"] = 'USD';
      expect(eur.code()).to.equal('EUR');
    });

    it('should create a new currenct object when localize method is called', () => {
      let usd_en = currency('USD', 'US Dollar');
      expect(usd_en.name()).to.equal('US Dollar');
      let usd_fr = usd_en.localize('Dollar americain');
      expect(usd_en.name()).to.equal('US Dollar');
      expect(usd_fr.name()).to.equal('Dollar americain');
    });

  });
});
