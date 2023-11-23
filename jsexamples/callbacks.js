//callbacks are just like regular variables

function showResponse(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

let ifNo = function () {
    alert("Bro how did u say no.");
}

showResponse("Are you 18?", function() {alert("Woohoo!!")}, ifNo);