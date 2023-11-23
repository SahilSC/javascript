function Calculator() {
    this.sum = () => this.a + this.b;
    this.mul = () => this.a*this.b;
    this.read = () => {
        this.a = +prompt("First number");
        this.b = +prompt("Second number");
    }
}

// let calc = new Calculator();
// calc.read();
// alert("Sum: " + calc.sum());
// alert("Mult: " + calc.mul());

function Accumulator(startVal = 0) {
    this.startVal = startVal;
    this.read = () => {this.startVal += +prompt("add a value")}
}

let acc = new Accumulator(1);
acc.read();
acc.read();
alert(acc.startVal)