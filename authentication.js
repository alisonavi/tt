// Get the elements
const loginContainer = document.getElementById("loginContainer");
const loginButton = document.getElementById("loginButton");
const adminPanelContent = document.getElementById("adminPanelContent");

// Function to check login credentials
function checkCredentials() {
  const username = "admin";
  const password = "password";

  const enteredUsername = document.getElementById("username").value;
  const enteredPassword = document.getElementById("password").value;

  if (enteredUsername === username && enteredPassword === password) {
    // store a flag in local storage indicating successful login
    localStorage.setItem("loggedIn", "true");

    // remove the login container from the DOM
    loginContainer.remove();

    // show the admin panel content
    adminPanelContent.style.display = "block";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

// check if the user is already logged in (on page load/refresh)
document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("loggedIn");
  if (isLoggedIn === "true") {
    // remove the login container from the DOM
    loginContainer.remove();

    // show the admin panel content
    adminPanelContent.style.display = "block";
  }
});

// add an event listener to the login button
loginButton.addEventListener("click", checkCredentials);
localStorage.clear();