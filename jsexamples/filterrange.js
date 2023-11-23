function filterRange(array, lowerBound, upperBound) {
    return array.filter((item) => item <= upperBound && item >= lowerBound);
}

arr = [1, 5, 2, 3, 6, 8, 4, 6, 1];
console.log(filterRange(arr, 3, 6))