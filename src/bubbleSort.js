/**
 * 快速排序
 * @param {*输入数组} arr 
 */
function bubbleSort(arr) {
    const sortedArr = arr //返回数组
    const { length } = arr // 数组长度缓存
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j] ^ arr[j+1];
                arr[j+1] = arr[j] ^ arr[j+1];
                arr[j] = arr[j] ^ arr[j+1];
            }
        }
    }
    return sortedArr
}
module.exports = bubbleSort