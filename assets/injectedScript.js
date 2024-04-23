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
console.log("top account id: ", account[0].id);

var originalBalance;
var originalBalanceHtml;
var originalBalanceStyle;

requestAnimationFrame(() => {
  // fires before next repaint

  requestAnimationFrame(() => {
    // fires before the _next_ next repaint
    // ...which is effectively _after_ the next repaint
    originalBalance = document.getElementsByClassName("jCqiVJ")[0];
    originalBalanceHtml = originalBalance.innerHTML;
    originalBalanceStyle = originalBalance.style.cssText;

    var button = document.getElementsByClassName("btXcFQ")[0];
    button.addEventListener("click", swapID);

    if (account[0].id % 2 == 0) {
      testChanges();
    }
  });
});

function swapID() {
  console.log("swapping ids");

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      accountString = localStorage.getItem("acctInfo");
      account = JSON.parse(accountString);

      console.log("new account id: ", account[0].id);

      if (account[0].id % 2 == 0) {
        testChanges();
      } else {
        restoreControl();
      }
    });
  });
}

function testChanges() {
  if (window.innerWidth < 500) {
    changeTitle();
    changeButton();
    hideToggle();
    changeBalance();
  }
}

function changeTitle() {
  var title1 = document.getElementsByClassName("hykaXs")[0];
  title1.textContent = "";

  var title2 = document.getElementsByClassName("hVhTzB")[0];
  title2.textContent = "User ID: #" + account[0].id;
}

function changeButton() {
  var button = document.getElementsByClassName("btXcFQ")[0];
  button.style.backgroundColor = "#FFA500";
  button.textContent = "Swap IDs";
}

function hideToggle() {
  var toggle = document.getElementsByClassName("dntGfP")[0];
  toggle.style.display = "none";
}

function changeBalance() {
  var balanceDiv = document.getElementsByClassName("gNnUBQ")[0];
  balanceDiv.style.display = "block";

  var balance = document.getElementsByClassName("jCqiVJ")[0];
  console.log(balance, balance.textContent, balance.style);
  balance.textContent = "Balance $" + account[0].balance;
  //   balance.style.display = "flex";
  balance.style.flexDirection = "row";
  balance.style.justifyContent = "flex-end";
  balance.style.fontSize = "18px";
  //   balance.style.fontWeight = "600";
}

function restoreControl() {
  original.innerHTML = originalHtml;
  original.style.cssText = originalStyle;

  //   var button = document.getElementsByClassName("btXcFQ")[0];
  //   button.addEventListener("click", swapID);
  var title1 = document.getElementsByClassName("hykaXs")[0];
  title1.textContent = "Welcome User";

  var title2 = document.getElementsByClassName("hVhTzB")[0];
  title2.textContent = "ID #: " + account[0].id;

  var button = document.getElementsByClassName("btXcFQ")[0];
  button.style.backgroundColor = "rgb(96, 125, 139)";
  button.textContent = "Swap Accounts";

  var toggle = document.getElementsByClassName("dntGfP")[0];
  toggle.style.display = "block";

  var balanceDiv = document.getElementsByClassName("gNnUBQ")[0];
  balanceDiv.style.display = "flex";

  var balance = document.getElementsByClassName("jCqiVJ")[0];
  balance.innerHTML = originalBalanceHtml;
  balance.style.cssText = originalBalanceStyle;
}
