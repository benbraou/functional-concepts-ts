
//protection against mutation through encapsulation
let currency = (code: string, name: string): any => {
  let _code = code;
  let _name = name;
  // return an object litteral interface
  return {
    code: () => {
      // _code is private acessible through closure
      return _code;
    },
    name: () => {
      // _name is private acessible through closure
      return _name;
    },
    localize: (i18n: string) => {
      return currency(_code, i18n);
    },
    toString: () => {
      return `${_code} (${_name})`;
    }
  };
};
export default currency;