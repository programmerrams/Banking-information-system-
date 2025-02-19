// declaring all variables and assigning them to the respective elements

// prompt("Please enter your first name");

let credit = document.getElementById("credit");

let firstName = document.querySelector(".firstName");

let lastName = document.querySelector(".lastName");

let salary = document.querySelector(".salary-amount");

let creditScore = document.querySelector(".credit-score");


let submitBtn = document.querySelector(".submit-btn");


submitBtn.addEventListener("click", function() {
  // Validate all fields are filled
  if (firstName.value === "" || lastName.value === "" || salary.value === "" || creditScore.value === "") {
    alert("Please fill in all fields");
    return;
  }

  // Parse and validate salary
  let salaryValue = parseInt(salary.value);
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

  // If all validations pass
  // alert("Thank you for your submission!");
  console.log("Form submitted successfully");
  console.log("Salary:", salaryValue);
  console.log("Credit Score:", creditScoreValue);

});
