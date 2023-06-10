// Select an element by its ID and change its text content
document.getElementById("myElement").textContent = "Hello, World!";

// Select multiple elements by class name and modify their styles
var elements = document.getElementsByClassName("myClass");
for (var i = 0; i < elements.length; i++) {
  elements[i].style.color = "red";
}

// Add an event listener to a button
document.getElementById("myButton").addEventListener("click", function() {
  // Code to execute when the button is clicked
  alert("Button clicked!");
});

// Make an AJAX request to fetch data from a server
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    console.log(data);
  }
};
xhttp.open("GET", "https://api.example.com/data", true);
xhttp.send();
