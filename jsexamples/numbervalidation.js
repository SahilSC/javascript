function readNumber(num) {
    if (num == null || num == '') {
        return null;
    }
    if (isFinite(num)) {
        return +num;
    }
}

let userValue = prompt("Enter a number: ")
while(!readNumber(userValue)) {
    userValue = prompt("Are you kidding me? Do you not know what a NUMBER???! is ?");
}
alert("Read: " + userValue)