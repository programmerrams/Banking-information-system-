// declaring variables

let loanAmount = document.querySelector(".loan-amount");
let interestRate = 20;

let loanTerm = document.querySelector(".loan-length");
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

submitButton.addEventListener("click", function () {
  switch (loanTerm.value) {
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

  let loanAmountValue = parseFloat(loanAmount.value);
  console.log(loanAmountValue);

  let monthlyPayment = calculateLoanPayment(loanAmountValue, interestRate, loanYears);
  monthlyPayment = monthlyPayment.toFixed(2);

  // Display the monthly payment on the console
  console.log(monthlyPayment);
  console.log(interestRate);
  console.log(loanYears);

  // Display the monthly payment on the page
});
