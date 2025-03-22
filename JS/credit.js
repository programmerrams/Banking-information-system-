"strict mode";


// declaring all variables and assigning them to the respective elements

let credit = document.getElementById("credit");

let firstName = document.querySelector(".firstName");

let lastName = document.querySelector(".lastName");

let salary = document.querySelector(".salary-amount");

let creditScore = document.querySelector(".credit-score");

let submitBtn = document.querySelector(".submit-btn");

let creditPercent = 0.25

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
  // Validate all fields are filled
  if (
    firstName.value === "" ||
    lastName.value === "" ||
    salary.value === "" ||
    creditScore.value === ""
  ) {
    alert("Please fill in all fields");
    return;
  }

  // Parse and validate salary
  let salaryValue = parseFloat(salary.value, 2);
  if (isNaN(salaryValue) || salaryValue <= 0) {
    alert("Please enter a valid salary amount");
    return;
  }

  // Validate credit score range

  let creditScoreValue = parseInt(creditScore.value);
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

  // opening the credit result page
  window.location.href = "creditResults.html";
  // console.log(isFloat(creditLimit));
});
