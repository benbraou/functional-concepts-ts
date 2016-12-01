
type fun = (...args: any[]) => any;

export const pipe = (fn: fun, ...fns: fun[]) => (...args: any[]) => fns.reduce((acc, fn) => fn(acc), fn(...args));

