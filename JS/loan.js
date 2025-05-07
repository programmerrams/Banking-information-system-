"use strict";
// declaring variables

let loanAmountDOM = document.querySelector(".loan-amount");
let interestRate = 20;

let loanTermDOM = document.querySelector(".loan-length");
let loanYears = 1;

// declaring the button

let submitButton = document.querySelector(".submit");

// function calculate loan payment
function calculateLoanPayment(principal, interestRate, loanTermYears) {
  // Convert annual interest rate to monthly
  const monthlyInterestRate = interestRate / 100 / 12;
  // Convert loan term in years to months
  const numberOfPayments = loanTermYears * 12;

  // Calculate the monthly payment using the formula
  const monthlyPayment =
    (principal * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

  return monthlyPayment;
}

// calculate monthly payments of the loan

function calculateMonthlyPayment() {
  // selecting radio buttons
  let reasonRadioButtons = document.querySelectorAll(
    'input[name="reason"]:checked'
  );

  // let currentRadioButton = document.querySelector('input[name="reason"]');
  // console.log(currentRadioButton);

  // Validate all fields are filled
  if (
    loanAmountDOM.value === "" ||
    loanTermDOM.value == "" ||
    reasonRadioButtons.length === 0
  ) {
    // tells the user the inputs fields they need to fill 
    if (loanAmount.value === "") {
      alert("Please fill in the loan amount field");
    }
    if (loanTerm.value == "") {
      alert("Please fill in the loan term field");
    }
    if (reasonRadioButtons.length === 0) {
      alert("Please fill in the reason for the loan field");
    }
    
    alert("Please fill in all fields");
    return;
  }

  console.log(reasonRadioButtons);

  // Switch statement to determine the loan term in years
  switch (loanTermDOM.value) {
    case "one-year":
      loanYears = 1;
      break;
    case "five-years":
      loanYears = 5;
      break;
    case "ten-years":
      loanYears = 10;
      break;
    case "fifteen-years":
      loanYears = 15;
      break;
    case "twenty-years":
      loanYears = 20;
      break;
    case "thirty-years":
      loanYears = 30;
      break;
    default:
      console.log("your code isn't working, please try again");
      break;
  }

  let loanAmountValue = parseFloat(loanAmountDOM.value);

  let monthlyPayment = calculateLoanPayment(
    loanAmountValue,
    interestRate,
    loanYears
  );
  monthlyPayment = monthlyPayment.toFixed(2);
  // store the monthly payment in local storage
  localStorage.setItem("monthlyPayment", monthlyPayment);

  // Display the monthly payment on the console
  console.log(monthlyPayment);
  console.log(interestRate);
  console.log(loanYears);

  // showing the results on the results section

  // monthly payment displayed
  document.querySelector(".monthly-payment").innerHTML = `$${monthlyPayment}`;

  // loan amount displayed
  document.querySelector(
    ".loan-amount-result"
  ).innerHTML = `$${loanAmountValue}`;

  // loan term displayed
  document.querySelector(
    ".loan-length-result"
  ).innerHTML = `${loanYears} years`;

  // interest rate displayed
  document.querySelector(".interest-rate").innerHTML = `${interestRate}%`;

  // reason for loan displayed
  document.querySelector(
    ".reason-result"
  ).innerHTML = `${reasonRadioButtons[0].value}`;

  // make the application results visible
  document.querySelector(".application-results").style.display = "block";

  // bring the results to the next page
  window.location.href = "loanResult.html";
}

// allows the submit to be clicked
submitButton.addEventListener("click", calculateMonthlyPayment);

// save the loan amount to local storage
loanAmountDOM.addEventListener("input", function () {
  localStorage.setItem("loanAmount", loanAmountDOM.value);
});

// save the loan term to local storage
loanTermDOM.addEventListener("input", function () {
  localStorage.setItem("loanYearsNum", loanYears);
});

// save the interest rate to local storage
let interestRateString = localStorage.setItem("interestRate", interestRate);

// save the reason for the loan to local storage

let reasonRadioButtons = document.querySelectorAll('input[name="reason"]');
reasonRadioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    localStorage.setItem("reason", radioButton.value);
  });
});
