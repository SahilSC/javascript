function filterRange(array, lowerBound, upperBound) {
    for (let i = array.length; i >=0; i--) {
        if (arr[i] < lowerBound || arr[i] > upperBound)
        {
            array.splice(i, 1);
        }
            
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

filterRange(arr, 3, 4)
console.log(arr);