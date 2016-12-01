
// Sum of array elements in imperative way
export let imperativeSum =(tab: number[]) =>{
  let res = 0;
  let index = 0;
  for (;index< tab.length;index++){
    res += tab[index];
  }
  return res;
};

// Sum of array elements in a declarative way
export let declarativeSum = (array: number[]) => (array.reduce((previous, current) => previous + current, 0));
