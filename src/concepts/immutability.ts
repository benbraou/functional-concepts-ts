
import { mergeSort } from './utils/array';

// Immutable Sort using merge sort
export let immutableSort = (tab: Array<number>): Array<number> => mergeSort(tab);

// Mutable Sort using merge sort
export let mutableSort = (tab: Array<number>): Array<number> => tab.sort((a, b) => a - b);