function sortDecreasing(arr) {
    //selection sort
    for (let i = 1; i < arr.length; i++) {
        let index = i;
        let value = arr[i];
        while (index > 0 && arr[index - 1] < value) {
            arr[index] = arr[index - 1];
            index--;
        }
        arr[index] = value;
    }
}

let arr = [-1, -3, 2, 1, 40, 1, -12, 41]
sortDecreasing(arr);
console.log(arr);