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
// retrieving string representations of local storage
var accountString = localStorage.getItem("acctInfo");
var offersString = localStorage.getItem("offers");

// parsing the string to a JSON object
var account = JSON.parse(accountString);
var offers = JSON.parse(offersString);

requestAnimationFrame(() => {
  // fires before next repaint

  requestAnimationFrame(() => {
    // fires before the _next_ next repaint
    // ...which is effectively _after_ the next repaint

    var button = document.getElementsByClassName("btXcFQ")[0];
    button.addEventListener("click", swapID);

    if (account[0].id % 2 == 0) {
      testChanges();
    }
  });
});

function swapID() {
  console.log("swapping ids");

  // retrieving string representations of local storage
  accountString = localStorage.getItem("acctInfo");
  offersString = localStorage.getItem("offers");

  // parsing the string to a JSON object
  account = JSON.parse(accountString);
  offers = JSON.parse(offersString);

  if (account[0].id % 2 == 0) {
    testChanges();
  } else {
    restoreControl();
  }
}

function testChanges() {
  if (window.innerWidth < 500) {
    changeTitle();
    changeButton();
  }
}

function restoreControl() {
  var title1 = document.getElementsByClassName("hykaXs");
  title1[0].textContent = "Welcome User";

  var title2 = document.getElementsByClassName("hVhTzB");
  title2[0].textContent = "ID #: " + account[0].id;

  var button = document.getElementsByClassName("btXcFQ")[0];
  button.style.backgroundColor = "rgb(96, 125, 139)";
  button.textContent = "Swap Accounts";
}

function changeTitle() {
  var title1 = document.getElementsByClassName("hykaXs");
  title1[0].textContent = "";

  var title2 = document.getElementsByClassName("hVhTzB");
  title2[0].textContent = "User ID: #" + account[0].id;
}

function changeButton() {
  //   console.log(account, offers);
  var button = document.getElementsByClassName("btXcFQ")[0];
  button.style.backgroundColor = "#FFA500";
  button.textContent = "Swap IDs";
}
