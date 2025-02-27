// initializing buttons

let depositButton = document.querySelector(".deposit");
let withdrawButton = document.querySelector(".withdraw");
let hideButton = document.querySelector(".hide");




// initializing hidden account settings

let AccountSettings = document.querySelector(".account-actions");

let CheckingsAccount;
let SavingsAccount;
let CreditCardAccount;

// showing the account modifying screen

function displayAccountsFunction (){
    AccountSettings.style.display = "block";
};

// hiding the account modifying screen
function hideAccountsFunction (){
    AccountSettings.style.display = "none";
}

// allows both buttons to show the account modifying screen
depositButton.addEventListener("click", displayAccountsFunction);
withdrawButton.addEventListener("click", displayAccountsFunction);

// allows the hide button to hide the account modifying screen
hideButton.addEventListener("click", hideAccountsFunction);

