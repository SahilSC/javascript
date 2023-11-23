function shuffle(arr) {
    let temp = arr.slice();
    // console.log(temp)
    let shuffled = [];

    while (temp.length != 0) {
        // shuffled.push();
        shuffled.push(temp.splice(Math.floor(Math.random() * temp.length), 1)[0])
    }
    return shuffled;
}


let arr = [1, 2, 3, 4];
console.log(shuffle(arr))
