"use strict";

// declaring all relevant variables

let bankStatement = document.querySelector(".credit-statement");

let userFirstName = localStorage.getItem("firstName");
let userLastName = localStorage.getItem("lastName");  
let creditLimitAmount = localStorage.getItem("creditAmount");
let creditScore = localStorage.getItem("creditScoreValue");

let creditscore = Number(localStorage.getItem("Credit Score"));


if (creditscore >= 600) {
bankStatement.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration your credit card limit is $${creditLimitAmount}.`;
}else {
    bankStatement.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration you are not qualified for a credit card.`;
}