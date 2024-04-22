// i needed to make changes after the dom has already loaded, this function didn't work so my workaround was doing a timeout
// document.addEventListener("DOMContentLoaded", function () {
// });

setTimeout(function () {
  // Your code to modify DOM elements here
  if (isMobileScreen) {
    changeTitle();
    changeButton();
  }
}, 1000); // Wait for 1 second before executing

function isMobileScreen() {
  return window.innerWidth < 500;
}

function changeTitle() {
  var elements = document.getElementsByClassName("hykaXs");
  elements[0].textContent = "";

  elements = document.getElementsByClassName(".hVhTzB");
  elements[0].textContent = "User " + elements[0].textContent;
}

function changeButton() {
  var buttons = document.getElementsByClassName("btXcFQ");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.style.backgroundColor = "#FFA500";
  }
}
