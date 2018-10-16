function selectionSort(arr) {
    const length = arr.length;
    let minIndex;
    for (let i = 0; i < length-1; i++) {
        minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

module.exports = selectionSort