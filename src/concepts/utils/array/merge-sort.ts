// My merge sort implementation
// https://github.com/benbraou/ts-sorting/blob/master/src/algorithms/merge-sort.ts

/**
 * Merge two sorted arrays into one sorted array
 * @param {Array<number>} tab1
 * @param {Array<number>} tab2
 * @returns {Array<number>}
 */
let merge = (tab1: Array<number>, tab2: Array<number>): Array<number> => {
    let result: Array<number> = [];
    let n1 = tab1.length;
    let n2 = tab2.length;
    let n = n1 + n2;
    let i = 0;
    let j = 0;
    for (let k = 0; k < n; k++) {
        if (j >= n2 || ((i < n1) && (tab1[i] < tab2[j]))) {
            result[k] = tab1[i];
            i++;
        } else {
            result[k] = tab2[j];
            j++;
        }
    }
    return result;
};

/**
 * Return a sorted array. The input array is not mutated
 * The idea is to recursively sort the two halves of an array
 * and have a subroutine that merges the two halves
 * @param {Array<number>} tab
 * @returns {Array<number>}
 */
let mergeSort = (tab: Array<number>): Array<number> => {
    if (tab.length === 0 || tab.length === 1) {
        return tab.slice();
    } else {
        let n = tab.length;
        let firstHalfLength = Math.round(n / 2);
        let firstHalfTable = tab.slice(0, firstHalfLength);
        let secondHalfTable = tab.slice(firstHalfLength, n);
        return merge(mergeSort(firstHalfTable), mergeSort(secondHalfTable));
    }
};

export {mergeSort};
