// intialize the gear symbol into the DOM
const gearSymbolDOM = document.querySelector(".gear-icon");
console.log(gearSymbolDOM);

let password = "Admin123";

// requires a password if the user clicks on the gear button
gearSymbolDOM.addEventListener("click", function (event) {
  event.preventDefault();
  let userPassWord = prompt("Please enter the password to access settings:");

  // prompt the user for a password
  if (userPassWord != password) {
    alert("Access denied! Incorrect password.");
  }
  // check if the password is correct
  else {
    // if correct, show the settings
    window.location.href = "changeRates.html";
    // alert("Access granted! You can now change the settings.");
  }
});
