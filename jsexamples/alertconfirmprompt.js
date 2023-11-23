alert("I am going to guess your birth year.");

let name = prompt("What is your name?");
if (name != null) {
  let age = prompt("Input your age");
  if (age != undefined) {
    confirm(`You were born in ${2023 - age}.`);
  } else {
    alert("You need to type in a valid age!");
  }
} else {
  alert("Please type in a valid name.");
}
