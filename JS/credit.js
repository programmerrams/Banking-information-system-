"strict mode";

// declaring all variables and assigning them to the respective elements

let credit = document.getElementById("credit");

let firstName = document.querySelector(".firstName");

let lastName = document.querySelector(".lastName");

let salary = document.querySelector(".salary-amount");

let creditScore = document.querySelector(".credit-score");

let submitBtn = document.querySelector(".submit-btn");

// Function to calculate credit card limit based on salary and credit score
function creditCardValue(creditscore) {
  if (creditscore >= 600) {
    let amountlimit = parseFloat(salary.value) * 0.25;
    return amountlimit;
  } else {
    return "You are not qualified for a credit card";
  }
}

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

  //convert credit limit to a string
  creditLimit = creditLimit.toString();
  // credit.innerHTML = `Your credit card limit is $${creditLimit}`;

  // If all validations pass
  // alert("Thank you for your submission!");
  console.log("Form submitted successfully");
  console.log("Salary:", salaryValue);
  console.log("Credit Score:", creditScoreValue);
  console.log("Credit Limit:", creditLimit);
  console.log("First Name:", firstName.value);
  console.log("Last Name:", lastName.value);

  localStorage.setItem("credit", JSON.stringify(credit));
  localStorage.setItem("creditAmount", JSON.stringify(creditLimit));
  localStorage.setItem("Credit Score", JSON.stringify(creditScoreValue));
  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", lastName.value);

  //verifying all results are saved in local storage
  console.log(localStorage.getItem("creditAmount"));
  console.log(localStorage.getItem("Credit Score"));
  console.log(localStorage.getItem("firstName"));
  console.log(localStorage.getItem("lastName"));

  // opening the credit result page
  // window.location.href = "creditResults.html";
  console.log(isFloat(creditLimit));
});
