function getMaxSubSum(arr) {
    let maxSum = 0;
    let curPrefix = 0;
    let lowestPrefix = 0;
    for (element of arr) {
        curPrefix += element;
        maxSum = Math.max(maxSum, curPrefix - lowestPrefix);
        lowestPrefix = Math.min(lowestPrefix, curPrefix);
    }
    return maxSum;
}

console.log(getMaxSubSum([1, 2, -1, 5]))