// intializing the report button
const reportButtonDOM = document.querySelector(".report-btn");

// intializing the report table
const reportTableDOM = document.querySelector(".table-display");

function generateReport() {
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
    "Ramses",
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
  }

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

    const headers = ["First Name", "Last Name", "credit card number", "Amount"];

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
    for (let i = 0; i < 10; i++) {
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
    }
  };

  createTable();
}

// adding eventlistener to the report button
reportButtonDOM.addEventListener("click", generateReport);
