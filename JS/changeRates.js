// initiating submit button
const submitButton = document.querySelector(".submit-button");

// initiating the input fields
let APRBox = document.querySelector(".APR");
let LateFees = document.querySelector(".Late-fees");
let OverDraftFees = document.querySelector(".Overdraft-fees");

// initiating the span elements 
let APRSpan = document.querySelector(".new-apr");
let LateFeesSpan = document.querySelector(".new-late-fees");
let OverDraftFeesSpan = document.querySelector(".new-overdraft-fees");

// initiating the submission section
let submitSection = document.querySelector(".submission-update");

// function to change the rate

function changeRates() {
  // making the submission section visible
  submitSection.style.display = "block";

  // getting the values from the input fields
  let APR = parseFloat(APRBox.value);
  let lateFees = parseFloat(LateFees.value);
  let overdraftFees = parseFloat(OverDraftFees.value);

  // Check if the values are valid numbers
  if (isNaN(APR) || isNaN(lateFees) || isNaN(overdraftFees)) {
    alert("Please enter valid numbers");
    submitSection.style.display = "none"; // Hide the submission section if input is invalid
    return;
  }

  // displaying new rates into the span elements
  APRSpan.textContent = APR + "%";
  LateFeesSpan.textContent =
    "$" + lateFees.toFixed(2);
  OverDraftFeesSpan.textContent =
    "$" + overdraftFees.toFixed(2);
}

submitButton.addEventListener("click", changeRates);
