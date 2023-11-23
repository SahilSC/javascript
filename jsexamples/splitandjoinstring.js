function camelize(arr) {
    return arr
        .split('-')
        .map((item, index) => {
            return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
        })
        .join('')
}

let arr = "john-apple-seed"
console.log(camelize(arr));
