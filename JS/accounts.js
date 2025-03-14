// initializing buttons

let depositButton = document.querySelector(".deposit");
let withdrawButton = document.querySelector(".withdraw");
let hideButton = document.querySelector(".hide");

let transactiontype;

// initializing hidden account settings

let AccountSettings = document.querySelector(".account-actions");

let checkingsAccount = parseFloat(
  document.querySelector(".checking-balance").innerHTML
);
let savingsAccount = parseFloat(
  document.querySelector(".saving-balance").innerHTML
);
let creditCardBalance = parseFloat(
  document.querySelector(".credit-balance").innerHTML
);

let accountActions = document.querySelector(".bank-action");
console.log(accountActions);

console.log(creditCardBalance);
console.log(savingsAccount);
console.log(checkingsAccount);

// showing the account modifying screen

function displayAccountsFunction() {
  AccountSettings.style.display = "block";
}
function performingWithdrawFunction() {
  AccountSettings.style.display = "block";
  transactiontype = "withdraw";
  console.log(transactiontype);
  accountActions.textContent = `you are currently making a ${transactiontype}.`;
}

function performingDepositFunction() {
  AccountSettings.style.display = "block";
  transactiontype = "deposit";
  console.log(transactiontype);
  accountActions.textContent = `you are currently making a ${transactiontype}.`;
}

// hiding the account modifying screen
function hideAccountsFunction() {
  AccountSettings.style.display = "none";
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
    console.log(checkingsAccount);
  } else if (transactionAccount === "savings") {
    affectedAccount = savingsAccount;
    console.log(savingsAccount);
  } else if (transactionAccount === "credit-card") {
    affectedAccount = creditCardBalance;
    console.log(creditCardBalance);
  } else {
    console.log("Invalid account");
    alert("Please select a valid account type.");
    return; // Exit the function if the account type is invalid
  }

  // Validate transaction amount
  if (isNaN(transactionAmount) || transactionAmount <= 0) {
    console.log("Invalid transaction amount");
    alert("Please enter a valid transaction amount greater than zero.");
    return; // Exit the function if the amount is invalid
  }

  if (transactiontype === "withdraw") {
    if (transactionAmount > affectedAccount) {
      console.log("Insufficient funds");
      alert("Insufficient funds for this transaction.");
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

  console.log(affectedAccount);
}

// allows both buttons to show the account modifying screen
depositButton.addEventListener("click", performingDepositFunction);
withdrawButton.addEventListener("click", performingWithdrawFunction);

// allows the hide button to hide the account modifying screen
hideButton.addEventListener("click", hideAccountsFunction);

// submit button
let submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", executeTransaction);
