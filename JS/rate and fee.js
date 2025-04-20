// intialize the gear symbol into the DOM
const gearSymbolDOM = document.querySelector(".gear-icon");
console.log(gearSymbolDOM);

let password = "Admin123";

// requires a password if the user clicks on the gear button
gearSymbolDOM.addEventListener("click", function () {
  
  
  
  let userPassWord = prompt("Please enter the password to access settings:");
  
  while (!userPassWord === password) {
    // prompt the user for a password
 
    // check if the password is correct
    if (userPassWord === password) {
      // if correct, show the settings
      alert("Access granted! You can now change the settings.");
      // Here you can add code to show the settings
    } else {
      // if incorrect, show an error message
      alert("Access denied! Incorrect password.");
      //refreshs the page
      location.reload();
    }
  }
});
