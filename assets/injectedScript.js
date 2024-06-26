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
    if (window.innerWidth < 500) {
      // saving this html and styling for control case
      originalBalance = document.getElementsByClassName("jCqiVJ")[0];
      originalBalanceHtml = originalBalance.innerHTML;
      originalBalanceStyle = originalBalance.style.cssText;

      originalOffers = document.getElementsByClassName("fdlpQJ");
      originalOfferHtml1 = originalOffers[0].firstChild.innerHTML;
      originalOfferHtml2 = originalOffers[0].lastChild.innerHTML;
      originalOfferStyle = originalOffers[0].style.cssText;

      // setting on onClick function for the button, so we know to switch between control and test case
      var button = document.getElementsByClassName("btXcFQ")[0];
      button.addEventListener("click", swapID);

      // if the current id is even, make the changes (need to refresh the first time)
      if (account[0].id % 2 == 0) {
        testChanges();
      }
    }
  });
});

function swapID() {
  console.log("swapping ids");
  // need to wait for account from local storage to update
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      if (window.innerWidth < 500) {
        accountString = localStorage.getItem("acctInfo");
        account = JSON.parse(accountString);

        if (account[0].id % 2 == 0) {
          testChanges();
        } else {
          restoreControl();
        }
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
  button.style.backgroundColor = "#FBBB91";
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

// making changes to both offer components
function changeOffers() {
  var offerDiv = document.getElementsByClassName("fdlpQJ")[0];
  offerDiv.style.flexDirection = "row";

  // using variable named offers referenced global variable, so named this offers1
  var offers1 = document.getElementsByClassName("hDijFX");
  var titleDivs = document.getElementsByClassName("kjJpxs");

  for (var i = 0; i < offers1.length; i++) {
    offers1[i].style.width = "33%";
    offers1[i].style.backgroundColor = "#CAE2EC";
    titleDivs[i].style.fontWeight = "800";
    titleDivs[i].style.fontSize = "120%";
    titleDivs[i].style.color = "white";
  }

  var titles = document.getElementsByClassName("gBZWha");
  titles[0].textContent = "Save";
  titles[1].textContent = "$" + offers[0].discount;
  titles[2].textContent = "Save";
  titles[3].textContent = "$" + offers[1].discount;

  var details = document.getElementsByClassName("impyGL");

  var newDetail = document.createElement("p");
  newDetail.textContent =
    offers[0].numOfPayments +
    " monthly payment of $" +
    offers[0].amtPerPayment +
    "\n\n" +
    "Payment Date: " +
    offers[0].paymentDate;
  newDetail.style.whiteSpace = "pre-line";
  newDetail.style.textAlign = "center";
  newDetail.style.height = "160px";

  details[0].replaceWith(newDetail);

  var newDetail2 = document.createElement("p");
  newDetail2.textContent =
    offers[1].numOfPayments +
    " monthly payments of $" +
    offers[1].amtPerPayment +
    "\n\n" +
    "Payment Date: " +
    offers[1].paymentDate;
  newDetail2.style.whiteSpace = "pre-line";
  newDetail2.style.textAlign = "center";
  newDetail2.style.height = "160px";

  details[0].replaceWith(newDetail2);

  var buttons = document.getElementsByClassName("bWirkk");
  buttons[0].style.backgroundColor = "#AACAB4";
  buttons[1].style.backgroundColor = "#AACAB4";
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

  var offerDiv = document.getElementsByClassName("fdlpQJ")[0];
  offerDiv.style.flexDirection = "column";

  var originalOffers = document.getElementsByClassName("fdlpQJ");
  originalOffers[0].firstChild.innerHTML = originalOfferHtml1;
  originalOffers[0].lastChild.innerHTML = originalOfferHtml2;
  originalOffers[0].firstChild.style.cssText = originalOfferStyle;
  originalOffers[0].lastChild.style.cssText = originalOfferStyle;
}

// BUGS + CHALLENGES :')

// 1. You have to refresh the page in order to see the test changes
// I thought this was due to changing the screen size in dev tools so the application doesn't run again, but when I test it on my mobile phone I also have to refresh

// 2. The application only works correctly when you start on the odd # ID
// I wasn't sure of what other way to save the original styling and code, other than saving the innerHTML and styles
// because of this, if we start on an even # ID, it will save the html (and account balance details) for that account

// 3. I wasn't able to get back to the test changes after accepting the offer (you must refresh to get the test changes back)
// since I don't have access to the id of the "back to homepage" button, I couldn't add an onClick function here to run test changes

// 4. Not sure if this is a bug, but sometimes the first click of "accept offer" leads to a 404 error
// I didn't change anything on this button except the background color

// 5. I found out I needed to make changes after the dom has already loaded, this "dom content loaded" function didn't work so my workaround was doing a timeout
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
