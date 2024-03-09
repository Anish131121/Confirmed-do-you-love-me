function showPopup() {
    alert("Thanks for Accepting");
}

function moveButton() {
    var noButton = document.getElementById("noButton");
    var x = Math.floor(Math.random() * 350);
    var y = Math.floor(Math.random() * 350);
    noButton.style.position = "absolute";
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
}