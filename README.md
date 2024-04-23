 BUGS + CHALLENGES :')

 1. You have to refresh the page in order to see the test changes
 I thought this was due to changing the screen size in dev tools so the application doesn't run again, but when I test it on my mobile phone I also have to refresh

 2. The application only works correctly when you start on the odd # ID
 I wasn't sure of what other way to save the original styling and code, other than saving the innerHTML and styles
 because of this, if we start on an even # ID, it will save the html (and account balance details) for that account
 (this will also be fixed if you refresh the page)

 4. I wasn't able to get back to the test changes after accepting the offer (you must refresh to get the test changes back)
 since I don't have access to the id of the "back to homepage" button, I couldn't add an onClick function here to run test changes

 5. Not sure if this is a bug, but sometimes the first click of "accept offer" leads to a 404 error
 I didn't change anything on this button except the background color

 6. I found out I needed to make changes after the dom has already loaded, this "dom content loaded" function didn't work so my workaround was doing a timeout
 I eventually found a more reliable solution by using the animation frames (there's probably still a better way to do this)

 document.addEventListener("DOMContentLoaded", function () {
 });

 setTimeout(function () {
   // Your code to modify DOM elements here
   if (window.innerWidth < 500) {
     // changeTitle();
     changeButton();
   }
 }, 1000); // Wait for 1 second before executing
