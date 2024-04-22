var element = document.getElementsByClassName("hykaXs");
console.log(element.textContent);
console.log("hello");

if (element) {
  element.textContent = "Modified content";
}

var element2 = document.getElementById("hykaXs");
console.log(element2.textContent);
console.log("hello2");

if (element2) {
  element2.textContent = "Modified content";
}
