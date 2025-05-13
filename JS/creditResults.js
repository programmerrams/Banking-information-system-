"use strict";

// declaring all relevant variables

let bankStatementDOM = document.querySelector(".credit-statement");

let userFirstName = localStorage.getItem("firstName");
let userLastName = localStorage.getItem("lastName");
let creditLimitAmount = localStorage.getItem("creditAmount");

let creditscore = Number(localStorage.getItem("Credit Score"));

let yesButtonDOM = document.querySelector(".yes-Button");
let noButtonDOM = document.querySelector(".no-Button");

let clientCreditNumberDOM = document.querySelector(".clientCreditNumber");

if (creditscore >= 600) {
  bankStatementDOM.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration your credit card limit is $${creditLimitAmount}.`;

  // enables the yes button if the user is qualified for a credit card
  yesButtonDOM.disabled = false;
  yesButtonDOM.style.backgroundColor = "green";
  yesButtonDOM.style.cursor = "pointer";
  console.log(creditscore);
} else if (creditscore < 600) {
  bankStatementDOM.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration you are not qualified for a credit card.`;

  console.log(creditscore);
  yesButtonDOM.disabled = true;
  yesButtonDOM.style.backgroundColor = "gray";
  yesButtonDOM.style.cursor = "not-allowed";
} else {
  bankStatementDOM.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration you are not qualified for a credit card.`;
  console.log(creditscore);

  // disables the yes button if the user is not qualified for a credit card
}

function creditNumberGenerator() {
  // Generate a random 16-digit credit card number
  let creditCardNumber = Math.floor(Math.random() * 10000000000000000);

  // seprates every 4 digits with dashes
  return creditCardNumber.toString().replace(/(\d{4})(?=\d)/g, "$1-");

  return creditCardNumber;
}

// Function to handle button clicks
yesButtonDOM.addEventListener("click", function () {
  alert(
    "Thank you for accepting the terms and conditions. Your credit card will be sent to you shortly."
  );

  let creditCardNumber = creditNumberGenerator();
  console.log(`Your credit card number is: ${creditCardNumber}`);
  localStorage.setItem("creditCardNumber", creditCardNumber);

  console.log(creditscore);
  console.log("this works");

  // showing credit card number on page
  clientCreditNumberDOM.textContent = `${creditCardNumber}`;
  clientCreditNumberDOM.style.color = "green";
});

noButtonDOM.addEventListener("click", function () {
  alert(
    "Thank you for declining the terms and conditions.) Your application will be canceled. You will be redirected to the home page."
  );
  window.location.href = "index.html";
});
