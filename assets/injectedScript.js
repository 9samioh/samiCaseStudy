// I wanted these variables to be accessible within the functions as well

// retrieving string representations of local storage by using their key
var accountString = localStorage.getItem("acctInfo");
var offersString = localStorage.getItem("offers");

// parsing the string to a JSON object
var account = JSON.parse(accountString);
var offers = JSON.parse(offersString);

// defining these global variables for us to store the original styling of the balance component
var originalBalance;
var originalBalanceHtml;
var originalBalanceStyle;

var originalOffers;
var originalOfferHtml1;
var originalOfferHtml2;
var originalOfferStyle;

// this was a workaround for waiting until the dom is fully loaded before accessing elements

// fires before next repaint
requestAnimationFrame(() => {
  // fires before the _next_ next repaint
  // ...which is effectively _after_ the next repaint
  requestAnimationFrame(() => {
    // saving this html and styling for control case
    originalBalance = document.getElementsByClassName("jCqiVJ")[0];
    originalBalanceHtml = originalBalance.innerHTML;
    originalBalanceStyle = originalBalance.style.cssText;

    originalOffers = document.getElementsByClassName("fdlpQJ");
    console.log(originalOffers);
    originalOfferHtml1 = originalOffers[0].innerHTML;
    originalOfferHtml2 = originalOffers[1].innerHTML;
    originalOfferStyle = originalOffers[0].style.cssText;

    // setting on onClick function for the button, so we know to switch between control and test case
    var button = document.getElementsByClassName("btXcFQ")[0];
    button.addEventListener("click", swapID);

    // if the current id is even, make the changes (need to refresh the first time)
    if (account[0].id % 2 == 0) {
      testChanges();
    }
  });
});

function swapID() {
  console.log("swapping ids");

  // need to wait for account from local storage to update
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      accountString = localStorage.getItem("acctInfo");
      account = JSON.parse(accountString);

      if (account[0].id % 2 == 0) {
        testChanges();
      } else {
        restoreControl();
      }
    });
  });
}

function testChanges() {
  // checking for mobile only (not sure what the max dimension for mobile is but can edit that here)
  if (window.innerWidth < 500) {
    changeTitle();
    changeButton();
    hideToggle();
    changeBalance();
    changeOffers();
  }
}

// making changes to the first two headers
function changeTitle() {
  var title1 = document.getElementsByClassName("hykaXs")[0];
  title1.textContent = "";

  var title2 = document.getElementsByClassName("hVhTzB")[0];
  title2.textContent = "User ID: #" + account[0].id;
}

// making change to the swap button
function changeButton() {
  var button = document.getElementsByClassName("btXcFQ")[0];
  button.style.backgroundColor = "#FFA500";
  button.textContent = "Swap IDs";
}

// removing the "hide details" feature
function hideToggle() {
  var toggle = document.getElementsByClassName("dntGfP")[0];
  toggle.style.display = "none";
}

// making changes to the informational panel's balance
function changeBalance() {
  var balanceDiv = document.getElementsByClassName("gNnUBQ")[0];
  balanceDiv.style.display = "block";

  var balance = document.getElementsByClassName("jCqiVJ")[0];
  balance.textContent = "Balance $" + account[0].balance;
  balance.style.flexDirection = "row";
  balance.style.justifyContent = "flex-end";
  balance.style.fontSize = "18px";
  balance.style.fontWeight = "800";
}

function changeOffers() {
  var offerDiv = document.getElementsByClassName("fdlpQJ")[0];
  offerDiv.style.flexDirection = "row";

  var offers = document.getElementsByClassName("hDijFX");
  for (var i = 0; i < offers.length; i++) {
    offers[i].style.width = "33%";
  }

  //   var titleDiv = document.getElementsByClassName("kjJpxs");
  var titles = document.getElementsByClassName("gBZWha");
  titles[0].textContent = "Save";
  titles[1].textContent = "$" + offers[0].discount;
  titles[2].textContent = "Save";
  titles[3].textContent = "$" + offers[1].discount;

  //   var titles = document.getElementsByClassName("kjJpxs");
  //   for (var i = 0; i < offers.length; i++) {
  //     offers[i].textContent = ;
  //   }
  console.log(titles);
}

// restoring original styling for control
function restoreControl() {
  // reverting all the styles so we still have the original for the control
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

  // I restored the control this way because there were too many style changes
  // I tried doing this method for the entire root div, but for some reason the id changing on-click didn't work anymore (in local storage)
  var balance = document.getElementsByClassName("jCqiVJ")[0];
  balance.innerHTML = originalBalanceHtml;
  balance.style.cssText = originalBalanceStyle;

  var originalOffers = document.getElementsByClassName("fdlpQJ");
  originalOffers[0].innerHTML = originalOfferHtml1;
  originalOffers[1].innerHTML = originalOfferHtml2;
  originalOffers[0].style.cssText = originalOfferStyle;
  originalOffers[1].style.cssText = originalOfferStyle;
}

// CHALLENGES :')
// I found out I needed to make changes after the dom has already loaded, this "dom content loaded" function didn't work so my workaround was doing a timeout
// I eventually found a more reliable solution by using the animation frames (there's probably still a better way to do this)

// document.addEventListener("DOMContentLoaded", function () {
// });

// setTimeout(function () {
//   // Your code to modify DOM elements here
//   if (window.innerWidth < 500) {
//     // changeTitle();
//     changeButton();
//   }
// }, 1000); // Wait for 1 second before executing
