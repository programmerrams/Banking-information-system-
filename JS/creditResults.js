"use strict";

// declaring all relevant variables

let bankStatementDOM = document.querySelector(".credit-statement");

let userFirstName = localStorage.getItem("firstName");
let userLastName = localStorage.getItem("lastName");  
let creditLimitAmount = localStorage.getItem("creditAmount");
let creditScore = localStorage.getItem("creditScoreValue");

let creditscore = Number(localStorage.getItem("Credit Score"));

let yesButtonDOM = document.querySelector(".yes-Button");
let noButtonDOM = document.querySelector(".no-Button");

let clientCreditNumberDOM = document.querySelector(".clientCreditNumber");


if (creditscore >= 600) {
bankStatementDOM.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration your credit card limit is $${creditLimitAmount}.`;
}else {
    bankStatementDOM.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration you are not qualified for a credit card.`;
}

function creditNumberGenerator() {

    // Generate a random 16-digit credit card number
    let creditCardNumber = Math.floor(Math.random() * 10000000000000000);
    
    // seprates every 4 digits with dashes
    return creditCardNumber.toString().replace(/(\d{4})(?=\d)/g, "$1-");

    return creditCardNumber;
}

// Function to handle button clicks
yesButtonDOM.addEventListener("click", function() {
    alert("Thank you for accepting the terms and conditions. Your credit card will be sent to you shortly.");

    let creditCardNumber = creditNumberGenerator();
    console.log(`Your credit card number is: ${creditCardNumber}`);
    localStorage.setItem("creditCardNumber", creditCardNumber);
    
    // showing credit card number on page
    clientCreditNumberDOM.textContent = `Your credit card number is: ${creditCardNumber}`;
    clientCreditNumberDOM.style.color = "green";
}
    
);

noButton.addEventListener("click", function() {
    alert("Thank you for declining the terms and conditions.) Your application will be canceled. You will be redirected to the home page.");
    window.location.href = "index.html";
});
