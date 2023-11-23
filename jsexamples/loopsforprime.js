let n = prompt("Enter an upper bound");
if (!n) {
    alert("Cancelled!")
}
else if (n <= 0) {
    alert("N must be a positive integer");
}
else {
    for (let i = 1; i <= n; i++) {
        let prime = true;
        label: for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                prime = false;
                break label;
            }
        };
        if (prime) {
            console.log(i);
        }
    }
}