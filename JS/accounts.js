// initializing buttons

let depositButtonDOM = document.querySelector(".deposit");
let withdrawButtonDOM = document.querySelector(".withdraw");
let hideButtonDOM = document.querySelector(".hide");
let payingcreditCardDOM = document.querySelector(".credit-button");

let transactiontype;

let AccountSettingsDOM = document.querySelector(".account-actions");

let checkingsAccount = parseFloat(
  document.querySelector(".checking-balance").innerHTML
);
let savingsAccount = parseFloat(
  document.querySelector(".saving-balance").innerHTML
);
let creditCardBalance = parseFloat(
  document.querySelector(".credit-balance").innerHTML
);

let accountTypeDOM = document.querySelector(".account-type");
console.log(accountTypeDOM[3].value);

console.log;

let accountActionsDOM = document.querySelector(".bank-action");
console.log(accountActionsDOM);

console.log(creditCardBalance);
console.log(savingsAccount);
console.log(checkingsAccount);

// showing the account modifying screen

function displayAccountsFunction() {
  AccountSettingsDOM.style.display = "block";
}
function performingWithdrawFunction() {
  AccountSettingsDOM.style.display = "block";
  transactiontype = "withdraw";
  console.log(transactiontype);
  accountActionsDOM.textContent = `you are currently making a ${transactiontype}.`;
  window.scrollTo(
    0,
    document.body.scrollHeight,
    (behavior = "smooth"),
    (duration = 200000)
  );

  // gets rid of any highlighted background color
  document.querySelector(".checking-balance").style.backgroundColor = "";
  document.querySelector(".saving-balance").style.backgroundColor = "";
  document.querySelector(".credit-balance").style.backgroundColor = "";
  // scrolls down to the bottom of the page smoothly
  window.scrollTo(
    0,
    document.body.scrollHeight,
    (behavior = "smooth"),
    (duration = 20000)
  );
}

function performingDepositFunction() {
  AccountSettingsDOM.style.display = "block";
  transactiontype = "deposit";
  console.log(transactiontype);
  accountActionsDOM.textContent = `you are currently making a ${transactiontype}.`;
  // scrolls down to the bottom of the page smoothly
  window.scrollTo(
    0,
    document.body.scrollHeight,
    (behavior = "smooth"),
    (duration = 20000)
  );
  // gets rid of any highlighted background color
  document.querySelector(".checking-balance").style.backgroundColor = "";
  document.querySelector(".saving-balance").style.backgroundColor = "";
  document.querySelector(".credit-balance").style.backgroundColor = "";
}

function payingcreditCardFunction() {
  AccountSettingsDOM.style.display = "block";
  transactiontype = "credit card";
  console.log(transactiontype);
  accountActionsDOM.textContent = `you are currently making a ${transactiontype}.`;
  // scrolls down to the bottom of the page smoothly
  window.scrollTo(
    0,
    document.body.scrollHeight,
    (behavior = "smooth"),
    (duration = 20000)
  );
  // gets rid of any highlighted background color
  document.querySelector(".checking-balance").style.backgroundColor = "";
  document.querySelector(".saving-balance").style.backgroundColor = "";
  document.querySelector(".credit-balance").style.backgroundColor = "";
}

// hiding the account modifying screen
function hideAccountsFunction() {
  AccountSettingsDOM.style.display = "none";
}

// console.log(transactionAccount.value);

// this in development
function executeTransaction() {
  let affectedAccount = 0;
  let transactionAmount = parseFloat(document.querySelector(".amount").value);

  let transactionAccount = document.querySelector(".account-type").value;
  console.log(transactionAccount);

  // selects the proper account
  if (transactionAccount === "checkings") {
    affectedAccount = checkingsAccount;
    console.log(affectedAccount);
    console.log(checkingsAccount);
  } else if (transactionAccount === "savings") {
    affectedAccount = savingsAccount;
    console.log(savingsAccount);
  } else if (transactionAccount === "credit-card") {
    affectedAccount = creditCardBalance;
    // credit card type is already selected
    transactionAccount = "credit-card";
    console.log(affectedAccount);
    console.log(creditCardBalance);
  } else {
    console.log("Invalid account");
    alert("Please select a valid account type.");
    return; // Exit the function if the account type is invalid
  }

  // Validate transaction amount
  if (isNaN(transactionAmount) || transactionAmount <= 0) {
    console.log(affectedAccount);
    console.log("Invalid transaction amount");
    alert("Please enter a valid transaction amount greater than zero.");
    return; // Exit the function if the amount is invalid
  }

  if (transactiontype === "withdraw") {
    if (transactionAmount > affectedAccount) {
      console.log("Insufficient funds");
      return alert("Insufficient funds for this transaction.");
    } else {
      affectedAccount -= transactionAmount;
      // Update the displayed balance
      if (transactionAccount === "checkings") {
        checkingsAccount = affectedAccount;
        document.querySelector(".checking-balance").innerHTML =
          checkingsAccount;
      } else if (transactionAccount === "savings") {
        savingsAccount = affectedAccount;
        document.querySelector(".saving-balance").innerHTML = savingsAccount;
      } else if (transactionAccount === "credit-card") {
        creditCardBalance = affectedAccount;
        document.querySelector(".credit-balance").innerHTML = creditCardBalance;
      }
    }
  }
  if (transactiontype === "deposit") {
    affectedAccount += transactionAmount;
    // Update the displayed balance
    if (transactionAccount === "checkings") {
      checkingsAccount = affectedAccount;
      document.querySelector(".checking-balance").innerHTML = checkingsAccount;
    } else if (transactionAccount === "savings") {
      savingsAccount = affectedAccount;
      document.querySelector(".saving-balance").innerHTML = savingsAccount;
    } else if (transactionAccount === "credit-card") {
      creditCardBalance = affectedAccount;
      document.querySelector(".credit-balance").innerHTML = creditCardBalance;
    }
  }
  if (transactiontype === "credit card") {
    // selects the credit card option in the selected elment
    transactionAccount = "credit-card";

    if (transactionAmount > affectedAccount) {
      console.log("your credit card payment is too high");
      alert("your credit card payment is too high");
      // scrolls back to the top of the page
      window.scrollTo(0, 0);
      // hides the account modifying screen
      AccountSettingsDOM.style.display = "none";
    } else {
      affectedAccount -= transactionAmount;
      // Update the displayed balance
      creditCardBalance = affectedAccount;
      document.querySelector(".credit-balance").innerHTML = creditCardBalance;
      window.scrollTo(0, 200);
      // hides the account modifying screen
      AccountSettingsDOM.style.display = "none";

      document.querySelector(".credit-balance").style.backgroundColor =
        "yellow";
      document.querySelector(".credit-balance").style.borderRadius = "10px";

      return alert(
        `Your credit card payment of $${transactionAmount} was successful! Your new balance is $${affectedAccount}.`
      );
      // scrolls back to the top of the page
    }
  }

  // Display a success message
  alert(`Transaction successful! Your new balance is $${affectedAccount}.`);
  console.log(affectedAccount);

  // jumps back to the top of the page
  window.scrollTo(0, 0);
  // hides the account modifying screen
  AccountSettingsDOM.style.display = "none";

  // the affected account's background color changes to yellow.
  if (transactionAccount === "checkings") {
    document.querySelector(".checking-balance").style.backgroundColor =
      "yellow";
    document.querySelector(".checking-balance").style.borderRadius = "10px";
  } else if (transactionAccount === "savings") {
    document.querySelector(".saving-balance").style.backgroundColor = "yellow";
    // changes border radius
    document.querySelector(".saving-balance").style.borderRadius = "10px";
  } else if (transactionAccount === "credit-card") {
    document.querySelector(".credit-balance").style.backgroundColor = "yellow";
    document.querySelector(".credit-balance").style.borderRadius = "10px";
  }
}

// allows both buttons to show the account modifying screen
depositButtonDOM.addEventListener("click", performingDepositFunction);
withdrawButtonDOM.addEventListener("click", performingWithdrawFunction);
payingcreditCardDOM.addEventListener("click", payingcreditCardFunction);

// allows the hide button to hide the account modifying screen
hideButtonDOM.addEventListener("click", hideAccountsFunction);

// submit button
let submitButtonDOM = document.querySelector(".submit");

submitButtonDOM.addEventListener("click", executeTransaction);
