function truncate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    }
    else {
        return str.slice(0, maxLength - 1) + "…";
    }
}

alert(truncate("What I'd like to tell on this topic is:", 20))

alert(truncate("Hi everyone!", 20))

function extractCurrencyValue(str) {
    return str.substring(1);
}

function validateInput(str) {
    return !!(str && str[0] == '$' && isFinite(str.substring(1)))
}

let input = prompt("Enter a currency in the form '$XXXX'")
while(!validateInput(input)) {
    input = prompt("Plz enter the correct format...");
}
alert(extractCurrencyValue(input))