document.getElementById("ask-button").addEventListener("click", function() {
  document.getElementById("popup").style.visibility = "visible";
});

document.getElementById("yes-button").addEventListener("click", function() {
  alert("Yay! You're my Valentine! 💖");
  document.getElementById("popup").style.visibility = "hidden";
});

document.getElementById("no-button").addEventListener("click", function() {
  alert("Oh no! Maybe next time. 😢");
  document.getElementById("popup").style.visibility = "hidden";
});