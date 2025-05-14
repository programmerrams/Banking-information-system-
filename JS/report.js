// if user clicks on the report link, a password is required to access the report page
// alert(
//   "Please enter the password to access the report page. If you do not have the password, please contact the network administrator."
// );

// intializing the report button
const reportDetailButtonDOM = document.querySelector(".report-btn");
const reportSummaryButtonDOM = document.querySelector(".report-btn.summary");

// intializing the body
const body = document.querySelector("body");

// intializing the report table
const reportTableDOM = document.querySelector(".table-display");

function generateDetailReport() {
  // creating an array of first names
  const firstNames = [
    "John",
    "Jane",
    "Jim",
    "Jack",
    "Jill",
    "Jerry",
    "Jessica",
    "Jordan",
    "Jasmine",
    "Jacob",
    "James",
    "Jared",
    "Javier",
    "Randy",
    "Jenna",
    "Malcolm",
    "Martha",
    "Mason",
    "Mia",
    "Megan",
    "Molly",
    "Mason",
  ];
  // creating an array of last names
  const lastNames = [
    "Doe",
    "Smith",
    "Brown",
    "Johnson",
    "Williams",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
  ];

  const fakeMaskedCreditCardNumber = () => {
    // generates a random four digit number
    return `****-****-****-${Math.floor(Math.random() * 9000) + 999}`;
  };

  const maskedCreditCardNumber = (number) => {
    // masks the credit card number with X's
    return number.toString().replace(/\d(?=\d{4})/g, "X");
  };

  const randomFirstName = () => {
    // generates a random first name
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  };
  const randomLastName = () => {
    // generates a random last name
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  };

  // generating random dollar amounts
  const randomDollarAmount = () => {
    // generates a random dollar amount
    return `$${Math.floor(Math.random() * 9000) + 999}`;
  };

  console.log("generating report...");

  // shows that the random values are generated
  console.log(randomFirstName());
  console.log(randomLastName());
  console.log(fakeMaskedCreditCardNumber());
  console.log(randomDollarAmount());

  // creates table with four headers
  const createTable = () => {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const titleheaderRow = (document.createElement("tr").textContent =
      "Credit Card Report Table");

    // creating an h1 title for the table
    const title = document.createElement("h1");
    title.textContent = "Credit Card Detail Report Table";
    // center the title
    title.style.textAlign = "center";
    title.classList.add("report-title");
    // appending the title to the report table
    reportTableDOM.appendChild(title);

    const headers = [
      "First Name",
      "Last Name",
      "Credit Card Number",
      "Balance",
    ];

    table.appendChild(title);

    headers.forEach((header) => {
      const th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    // Clear previous table content
    reportTableDOM.innerHTML = "";
    reportTableDOM.appendChild(table);
    // generating 10 rows of data
    for (let i = 0; i < 20; i++) {
      const row = document.createElement("tr");
      const firstName = document.createElement("td");
      const lastName = document.createElement("td");
      const creditCardNumber = document.createElement("td");
      const amount = document.createElement("td");

      firstName.textContent = randomFirstName();
      lastName.textContent = randomLastName();
      creditCardNumber.textContent = fakeMaskedCreditCardNumber();
      amount.textContent = randomDollarAmount();

      row.appendChild(firstName);
      row.appendChild(lastName);
      row.appendChild(creditCardNumber);
      row.appendChild(amount);

      table.appendChild(row);

      // sorting amounts from smallest to largest
      const rows = Array.from(table.querySelectorAll("tr")).slice(1);
      rows.sort((a, b) => {
        const amountA = parseFloat(a.cells[3].textContent.replace("$", ""));
        const amountB = parseFloat(b.cells[3].textContent.replace("$", ""));
        return amountA - amountB;
      });
      rows.forEach((row) => table.appendChild(row));
    }
  };

  createTable();
}

// function to generate summary report
function generateSummaryReport() {
  // creating an array of first names
  const firstNames = [
    "John",
    "Jane",
    "Jim",
    "Jack",
    "Jill",
    "Jerry",
    "Jessica",
    "Jordan",
    "Jasmine",
    "Jacob",
    "James",
    "Jared",
    "Javier",
    "Randy",
    "Jenna",
    "Malcolm",
    "Martha",
    "Mason",
    "Mia",
    "Megan",
    "Molly",
  ];
  // creating an array of last names
  const lastNames = [
    "Doe",
    "Smith",
    "Brown",
    "Johnson",
    "Williams",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
  ];

  // generating random dollar amounts
  const randomDollarAmount = () => {
    // generates a random dollar amount
    return `$${Math.floor(Math.random() * 9000) + 999}`;
  };

  const randomFirstName = () => {
    // generates a random first name
    return firstNames[Math.floor(Math.random() * firstNames.length)];
  };
  const randomLastName = () => {
    // generates a random last name
    return lastNames[Math.floor(Math.random() * lastNames.length)];
  };

  const fakeMaskedCreditCardNumber = () => {
    // generates a random four digit number
    return `****-****-****-${Math.floor(Math.random() * 9000) + 999}`;
  };

  console.log("generating report...");

  // shows that the random values are generated
  console.log(randomFirstName());
  console.log(randomLastName());
  console.log(fakeMaskedCreditCardNumber());
  console.log(randomDollarAmount());

  // creates table with four headers
  const createTable = () => {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    // creating an h1 title for the table
    const title = document.createElement("h1");
    title.textContent = "All User Accounts summary Report";
    // center the title
    title.style.textAlign = "center";
    title.classList.add("report-title");
    // appending the title to the report table
    firstNames.forEach((firstName) => {
      const th = document.createElement("th");
      th.textContent = firstName;
    });

    lastNames.forEach((lastName) => {
      const th = document.createElement("th");
      th.textContent = lastName;
    });
    const headers = [
      "First Name",
      "Last Name",
      "Credit Card Number",
      "Checking Account",
      "Savings Account",
      "Credit Card Balance",
    ];
    for (let i = 0; i < headers.length; i++) {
      const th = document.createElement("th");
      th.textContent = headers[i];
      headerRow.appendChild(th);
    }

    table.appendChild(headerRow);

    // generating 20 rows of data
    for (let i = 0; i < 10; i++) {
      const row = document.createElement("tr");
      const firstName = document.createElement("td");
      const lastName = document.createElement("td");
      const checkingAccount = document.createElement("td");
      const savingsAccount = document.createElement("td");
      const creditCardNumber = document.createElement("td");
      const amount = document.createElement("td");

      firstName.textContent = randomFirstName();
      lastName.textContent = randomLastName();
      creditCardNumber.textContent = fakeMaskedCreditCardNumber();
      checkingAccount.textContent = randomDollarAmount();
      savingsAccount.textContent = randomDollarAmount();
      amount.textContent = randomDollarAmount();

      row.appendChild(firstName);
      row.appendChild(lastName);
      row.appendChild(creditCardNumber);
      row.appendChild(amount);
      row.appendChild(checkingAccount);
      row.appendChild(savingsAccount);

      table.appendChild(row);

      // sorting amounts from smallest to largest
      const rows = Array.from(table.querySelectorAll("tr")).slice(1);
      rows.sort((a, b) => {
        const amountA = parseFloat(a.cells[3].textContent.replace("$", ""));
        const amountB = parseFloat(b.cells[3].textContent.replace("$", ""));
        return amountA - amountB;
      });
      rows.forEach((row) => table.appendChild(row));
    }
    // the last row on the table will have the average of the amounts
    const lastRow = document.createElement("tr");
    const firstName = document.createElement("td");
    const lastName = document.createElement("td");
    const checkingAccount = document.createElement("td");
    const savingsAccount = document.createElement("td");
    const creditCardNumber = document.createElement("td");
    const amount = document.createElement("td");
    const average = document.createElement("td");
    const averageAmount = document.createElement("td");
    const averageCheckingAccount = document.createElement("td");
    const averageSavingsAccount = document.createElement("td");
    const averageCreditCardNumber = document.createElement("td");
    // calculating the average of the amounts
    const averageAmountValue = (
      Array.from(table.querySelectorAll("tr"))
        .slice(1)
        .reduce((acc, row) => {
          const amount = parseFloat(row.cells[3].textContent.replace("$", ""));
          return acc + amount;
        }, 0) / 10
    ).toFixed(2);
    const averageCheckingAccountValue = (
      Array.from(table.querySelectorAll("tr"))
        .slice(1)
        .reduce((acc, row) => {
          const checkingAccount = parseFloat(
            row.cells[4].textContent.replace("$", "")
          );
          return acc + checkingAccount;
        }, 0) / 10
    ).toFixed(2);

    const averageSavingsAccountValue = (
      Array.from(table.querySelectorAll("tr"))
        .slice(1)
        .reduce((acc, row) => {
          const savingsAccount = parseFloat(
            row.cells[5].textContent.replace("$", "")
          );
          return acc + savingsAccount;
        }, 0) / 10
    ).toFixed(2);

    // setting the text content of the last row to the average values

    firstName.textContent = "Calculating Average";
    lastName.textContent = "Calculating Average";
    checkingAccount.textContent = averageCheckingAccountValue;
    savingsAccount.textContent = averageSavingsAccountValue;
    creditCardNumber.textContent = "Calculating Average";
    amount.textContent = averageAmountValue;
    average.textContent = "Average";
    averageAmount.textContent = averageAmountValue;
    averageCheckingAccount.textContent = averageCheckingAccountValue;
    averageSavingsAccount.textContent = averageSavingsAccountValue;
    averageCreditCardNumber.textContent = "Calculating Average";
    lastRow.appendChild(firstName);
    lastRow.appendChild(lastName);
    lastRow.appendChild(creditCardNumber);
    lastRow.appendChild(amount);
    lastRow.appendChild(checkingAccount);
    lastRow.appendChild(savingsAccount);
    table.appendChild(lastRow);

    reportTableDOM.appendChild(title);
    reportTableDOM.appendChild(table);
  };
  createTable();
}

// adding eventlistener to the report button
reportDetailButtonDOM.addEventListener("click", generateDetailReport);
reportSummaryButtonDOM.addEventListener("click", generateSummaryReport);

// must enter the password to access the report page.
let correctPassword = "manager123"; // The correct password
let Userpassword = prompt("Enter the password:");
if (Userpassword === correctPassword) {
  console.log("Access granted! You can now view the report page.");
  // change the opacity of the report button to 1
  body.style.opacity = "1";
} else {
  alert("Incorrect password. You cannot access the report page.");
  window.location.href = "../html/index.html"; // Redirect to the home page
}
