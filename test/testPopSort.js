const popSort = require('../src/bubbleSort');
const insertSort = require('../src/inserSort');
const selectionSort = require('../src/selectionSort');
const quickSort = require('../src/quickSort')

const testArr = [34,23,12,5,7,-1,2,-103];
// const result = popSort(testArr);
// console.log(result);

// const errorArr = null;
// console.log(popSort())
console.log(quickSort(testArr))