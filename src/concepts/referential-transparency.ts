// Referential transparency is a quilaity of pure functions.
// The same result is always returned with the same input
export let iAmAPureIncrementer = (n: number) => {
  n++;
  return n;
};
