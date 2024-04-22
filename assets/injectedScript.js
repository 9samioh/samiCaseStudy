window.onload = function () {
  // Your code to modify DOM elements here
  var elements = document.getElementsByClassName("hykaXs");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    // Do something with each element, for example:
    element.style.color = "red";
    //   element.innerHTML = "injected";
    element.textContent = "injected";
    //   element.innerHTML = "injected";
    //   element.innerText = "injected";
  }
  var buttons = document.getElementsByClassName("btXcFQ");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.style.backgroundColor = "#FFA500";
  }
  console.log("loaded now", elements, buttons);
};

// var elements = document.getElementsByClassName("hykaXs");
// // console.log(element.textContent);
// console.log("hello");

// for (var i = 0; i < elements.length; i++) {
//   var element = elements[i];
//   // Do something with each element, for example:
//   element.style.color = "red";
//   //   element.innerHTML = "injected";
//   element.textContent = "injected";
//   element.innerHTML = "injected";
//   element.innerText = "injected";
// }

var elements2 = document.getElementsByClassName("sc-hLQSwg hykaXs header");

for (var i = 0; i < elements2.length; i++) {
  var element2 = elements[i];
  // Do something with each element, for example:
  element2.style.color = "red";
  //   element.innerHTML = "injected";
  element2.textContent = "injected";
  //   element.innerHTML = "injected";
  element2.innerText = "injected";
}

(function () {
  // Print a message to the browser console
  console.log(
    "Hello, world! This message is printed from injected JavaScript file.",
    // elements,
    elements2
  );
})();

// if (element) {
//   element.textContent = "Modified content";
// }

// var element2 = document.getElementById("hykaXs");
// console.log(element2.textContent);
// console.log("hello2");

// if (element2) {
//   element2.textContent = "Modified content";
// }
