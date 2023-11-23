//if statements convert the thing inside to boolean.
//remember "", 0, NaN, null == false in boolean realm.

password = "abc123";
let user = prompt("Who's there?");
if (!user) {
  alert("Cancelled.");
} else if (user != "Admin") {
  alert("I don't know who you are.");
} else {
  let pass = prompt("What is the password?");
  if (!pass) {
    alert("Cancelled.");
  } else if (pass != password) {
    alert("Wrong password. Nice try Mr. Hacker!");
  } else {
    alert("Alright, I guess you have permission to be here...");
  }
}
