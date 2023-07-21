function labas() {
    console.log("SVEIKI, SKAITOTE CONSOLE.LOG?");
}
window.onload = labas;

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("pirkti");
    button.addEventListener("click", function() {
      button.style.backgroundColor = "green";
    });
  })