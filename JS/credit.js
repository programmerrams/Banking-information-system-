"strict mode";

// declaring all variables and assigning them to the respective elements

let credit = document.getElementById("credit");

let firstName = document.querySelector(".firstName");

let lastName = document.querySelector(".lastName");

let salary = document.querySelector(".salary-amount");

let creditScore = document.querySelector(".credit-score");

let submitBtn = document.querySelector(".submit-btn");

let creditPercent = 0.25;

let submissionForm = document.querySelector(".submission-form");

// Function to calculate credit card limit based on salary and credit score
function creditCardValue(creditscore) {
  if (creditscore >= 600) {
    let amountlimit = parseFloat(salary.value) * creditPercent;
    return amountlimit;
  } else {
    return "You are not qualified for a credit card";
  }
}

// makes sure the user doesn't add any numbers to the first and last name fields
firstName.addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/g, "");
});
lastName.addEventListener("input", function () {
  this.value = this.value.replace(/[0-9]/g, "");
});

submitBtn.addEventListener("click", function () {
  // lets the form go to another page after submission
  // submissionForm.action = "creditResults.html";
  // submissionForm.preventDefault();

  // Validate all fields are filled
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    salary.value === "" ||
    creditScore.value === "" ||
    creditScore.value === 0 ||
    creditScore.value === null
  ) {
    alert("Please fill in the following fields: ");
    if (firstName.value === "") {
      alert("please enter your First Name");
      // changes the color of the first name input field to red
      firstName.style.borderColor = "red";
    }

    if (lastName.value === "") {
      alert("please enter your Last Name");
      // changes the color of the last name input field to red
      lastName.style.borderColor = "red";
    }
    if (salary.value === "") {
      alert("please enter your Salary Amount");
      // changes the color of the salary input field to red
      salary.style.borderColor = "red";
    }
    if (creditScore === "") {
      alert("please enter your Credit Score");
      // changes the color of the credit score input field to red
      creditScore.style.borderColor = "red";
    } else {
      // changes the color of the first name input field to green
      firstName.style.borderColor = "green";
      firstName.style.borderWidth = "5px";

      // changes the color of the last name input field to green
      lastName.style.borderColor = "green";
      firstName.style.borderWidth = "5px";

      // changes the color of the salary input field to green
      salary.style.borderColor = "green";
      firstName.style.borderWidth = "5px";

      // changes the color of the credit score input field to green
      creditScore.style.borderColor = "green";
      firstName.style.borderWidth = "5px";
    }
  }

  // Parse and validate salary
  let salaryValue = parseFloat(salary.value, 2);
  if (isNaN(salaryValue) || salaryValue <= 0) {
    alert("Please enter a valid salary amount");
    return;
  }

  // Validate credit score range

  let creditScoreValue = parseInt(creditScore);
  if (creditScoreValue < 300 || creditScoreValue > 850) {
    alert("Credit score must be between 300 and 850");
    return;
  }

  // Calculate credit card limit
  let creditLimit = creditCardValue(creditScoreValue);

  // If all validations pass
  // alert("Thank you for your submission!");

  localStorage.setItem("credit", JSON.stringify(credit));
  localStorage.setItem("creditAmount", creditLimit);
  localStorage.setItem("Credit Score", JSON.stringify(creditScoreValue));
  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", lastName.value);

  console.log(creditScore);

  // opening the credit result page
  window.location.href = "creditResults.html";
  // console.log(isFloat(creditLimit));
});
