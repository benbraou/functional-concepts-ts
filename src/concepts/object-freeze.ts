class Currency {
  code: string;
  name: string;
  constructor(code: string, name: string) {
    this.code = code;
    this.name = name;
  }
}

var euro = Object.freeze(new Currency('EUR', 'EURO'));
// the hidden object metraproperty writable is set to false.


// Object.freeze is a shoallow operation.
// deep-freeze : https://github.com/substack/deep-freeze/blob/master/index.js
