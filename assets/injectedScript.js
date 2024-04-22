// i needed to make changes after the dom has already loaded, this function didn't work so my workaround was doing a timeout
// document.addEventListener("DOMContentLoaded", function () {
// });

// setTimeout(function () {
//   // Your code to modify DOM elements here
//   if (window.innerWidth < 500) {
//     // changeTitle();
//     changeButton();
//   }
// }, 1000); // Wait for 1 second before executing

requestAnimationFrame(() => {
  // fires before next repaint

  requestAnimationFrame(() => {
    // fires before the _next_ next repaint
    // ...which is effectively _after_ the next repaint

    if (window.innerWidth < 500) {
      changeTitle();
      changeButton();
    }
  });
});

var account = localStorage.getItem("acctInfo");
var offers = localStorage.getItem("offers");

function isMobileScreen() {
  return window.innerWidth < 500;
}

function changeTitle() {
  var title1 = document.getElementsByClassName("hykaXs");
  title1[0].textContent = "";

  var title2 = document.getElementsByClassName("hVhTzB");
  console.log(
    title2,
    "window size: ",
    window.innerWidth,
    account,
    account[0].id
  );

  //   title2[0].textContent = "User ID: #" + account[0].id;
}

function changeButton() {
  console.log(account, offers);
  var buttons = document.getElementsByClassName("btXcFQ");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.style.backgroundColor = "#FFA500";
  }
}
