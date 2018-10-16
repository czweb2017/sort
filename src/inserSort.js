function insertSort(arr) {
    const length = arr.length
    for(let i=1;i<length;i++) {
        const key = arr[i]
        let j=i-1;
        while(arr[j]>key) {
            arr[j+1]=arr[j];
            j--
        }
        arr[j+1]=key;
    }
    return arr
}

module.exports = insertSort