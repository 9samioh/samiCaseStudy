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

(function loadApp() {
  // retrieving string representations of local storage
  var accountString = localStorage.getItem("acctInfo");
  var offersString = localStorage.getItem("offers");

  // parsing the string to a JSON object
  var account = JSON.parse(accountString);
  var offers = JSON.parse(offersString);
  testChanges();

  console.log("loading app with account: ", account);
})();

function testChanges() {
  requestAnimationFrame(() => {
    // fires before next repaint

    requestAnimationFrame(() => {
      // fires before the _next_ next repaint
      // ...which is effectively _after_ the next repaint

      if (window.innerWidth < 500 && account[0].id % 2 == 0) {
        changeTitle();
        changeButton();
      }
    });
  });
}

function isMobileScreen() {
  return window.innerWidth < 500;
}

function changeTitle() {
  var title1 = document.getElementsByClassName("hykaXs");
  title1[0].textContent = "";

  var title2 = document.getElementsByClassName("hVhTzB");
  //   console.log(title2, "window size: ", window.innerWidth, account, account.id);

  title2[0].textContent = "User ID: #" + account[0].id;
}

function changeButton() {
  //   console.log(account, offers);
  var button = document.getElementsByClassName("btXcFQ")[0];
  button.style.backgroundColor = "#FFA500";
  button.textContent = "Swap IDs";
  button.addEventListener("click", loadApp);
}
