console.log("Hello World");
alert("Hello!");

var target = document.getElementById("target");
target.innerText  = "Hi!";

var button = document.getElementById("button");
button.addEventListener('click', function () {
  alert("yes thanks for clicking me");
  var username = document.getElementById("username");
  is (username.value == "admin") {
      alert("Welcome!");
  } else {
      alert("go away you are not welcome >:(")
  }
});
