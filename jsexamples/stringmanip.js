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

