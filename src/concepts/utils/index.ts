// Compose using es6 rest operator and recursion:
// https://medium.com/@dtipson/creating-an-es6ish-compose-in-javascript-ac580b95104a#.cd8jda9z1

type fun = (...args: any[]) => any;

export const pipe = (fn: fun, ...fns: fun[]) => (...args: any[]) => fns.reduce((acc, fn) => fn(acc), fn(...args));

// TypeScript (2.0) compiler incorrectly reports parameter/ call target sginature mismatch when using spear operator
// https://github.com/Microsoft/TypeScript/issues/4130

// Use this commented compose definition once TypeScript issue referenced above is fixed
// export const compose = (fn: fun, ...rest: fun[]) =>
//   rest.length === 0 ? fn : (...args: any[]) => fn(compose(...rest)(...args));

export const compose = (fn: fun, ...rest: fun[]): fun =>
  rest.length === 0 ? fn : (...args: any[]) => {
    var f0 = rest.shift();
    return fn(compose(f0, ...rest)(...args));
  };

var tab: any[];




