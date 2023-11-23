let arr = ["Jazz"];
arr[arr.length] = "Blues";
arr.push("Rock-n-Roll");
arr[Math.floor(arr.length/2)] = "Classics";
console.log(arr.shift());
arr.unshift("Rap", "Reggae")
console.log(arr)