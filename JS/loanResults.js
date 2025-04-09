// getting variables from localstorage

let loanAmount = localStorage.getItem("loanAmount");
let loanTerm = localStorage.getItem("loanTerm");
let interestRate = localStorage.getItem("interestRate");
let reason = localStorage.getItem("reason");
let monthlyPayment = localStorage.getItem("monthlyPayment");

// converting the values to the correct type (numbers)
let loanAmountValue = parseFloat(loanAmount);
let loanYears = parseInt(loanTerm);
let interestRateValue = parseFloat(interestRate);
let reasonValue = reason;
let monthlyPaymentValue = parseFloat(monthlyPayment);

// creating DOM variables 
let loanAmountDOM = document.querySelector(".loanAmount");
let loanTermDOM = document.querySelector(".loanTerm");
let interestRateDOM = document.querySelector(".interestRate");
let reasonDOM = document.querySelector(".reason");
let monthlyPaymentDOM = document.querySelector(".monthlyPayment");


// displaying the values in the DOM
loanAmountDOM.innerHTML = `$${loanAmountValue}`;
loanTermDOM.innerHTML = `${loanYears} years`;
interestRateDOM.innerHTML = `${interestRateValue}%`;
reasonDOM.innerHTML = `${reasonValue}`;
monthlyPaymentDOM.innerHTML = `$${monthlyPaymentValue}`;



