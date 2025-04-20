
// intialize the gear symbol into the DOM
const gearSymbolDOM = document.querySelector('.gear-icon');
console.log(gearSymbolDOM);


let password = "Admin123";



// requires a password if the user clicks on the gear button
gearSymbolDOM.addEventListener('click', function() {
    // prompt the user for a password
    let userPassword = prompt("Please enter the password to access settings:");
    
    // check if the password is correct
    if (userPassword === password) {
        // if correct, show the settings
        alert("Access granted! You can now change the settings.");
        // Here you can add code to show the settings
    } else {
        // if incorrect, show an error message
        alert("Access denied! Incorrect password.");
    }
});

