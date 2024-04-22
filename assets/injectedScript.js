var elements = document.getElementsByClassName("hykaXs");
// console.log(element.textContent);
console.log("hello");

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  // Do something with each element, for example:
  element.style.color = "red";
}

(function () {
  // Print a message to the browser console
  console.log(
    "Hello, world! This message is printed from injected JavaScript file."
  );
})();

// if (element) {
//   element.textContent = "Modified content";
// }

var element2 = document.getElementById("hykaXs");
console.log(element2.textContent);
console.log("hello2");

if (element2) {
  element2.textContent = "Modified content";
}
