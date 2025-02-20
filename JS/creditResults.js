"use strict";

// declaring all relevant variables

let bankStatement = document.querySelector(".credit-statement");

let userFirstName = localStorage.getItem("firstName");
let userLastName = localStorage.getItem("lastName");  
let creditLimitAmount = localStorage.getItem("creditLimit");
// let approvedAmount = localStorage.getItem("creditAmount");

bankStatement.textContent = `hello ${userFirstName} ${userLastName}, after careful consideration your credit card limit is $${creditLimitAmount}.`;