"use strict";

// getting variables from localstorage

let loanAmount = localStorage.getItem("loanAmount");
let loanYears = localStorage.getItem("loanYearsNum");
let interestRate = localStorage.getItem("interestRate");
let reason = localStorage.getItem("reason");
let monthlyPayment = localStorage.getItem("monthlyPayment");

console.log(loanAmount);
console.log(loanYears);
console.log(interestRate);
console.log(reason);
console.log(monthlyPayment);

// converting the values to the correct type (numbers)
let loanAmountValue = parseFloat(loanAmount);
let loanYearsInt = parseInt(loanYears);
let interestRateNum = parseInt(interestRate);
let reasonValue = reason;
let monthlyPaymentValue = parseFloat(monthlyPayment);

// creating DOM variables
let loanAmountDOM = document.querySelector(".loanAmount");
let loanTermDOM = document.querySelector(".loanTerm");
let interestRateDOM = document.querySelector(".interestRate");
let reasonDOM = document.querySelector(".reason");
let monthlyPaymentDOM = document.querySelector(".monthlyPayment");

// displaying the values in the DOM
loanAmountDOM.innerHTML = `loan amount: $${loanAmount}`;
loanTermDOM.innerHTML = `loan years: ${loanYearsInt} years`;
interestRateDOM.innerHTML = `your interest rate is ${interestRateNum}%`;
reasonDOM.innerHTML = `Reason: ${reasonValue}`;
monthlyPaymentDOM.innerHTML = `$${monthlyPaymentValue.toFixed(2)}`;
