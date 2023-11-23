function getInput(arr) {
    let num = prompt("Enter a value")
    while(num != null && num != '' && isFinite(num)) {
        arr.push(+num);
        num = prompt("Enter a value")
    }
    return arr;
}

function getSum(arr) {
    let sum = 0;
    for (let element of arr) {
        sum+=element;
    }
    return sum;
}

arr = getInput([]);

alert(getSum(arr));




