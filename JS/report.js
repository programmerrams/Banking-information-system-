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

  const randomFourDigits = () => {
    // generates a random four digit number
    return Math.floor(Math.random() * 9000) + 999;
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
    return `$ ${Math.floor(Math.random() * 9000) + 999};`;
  };

  console.log("generating report...");

  console.log(randomFirstName());
  console.log(randomLastName());
  console.log(randomFourDigits());
  console.log(randomDollarAmount());
}

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
  reportButtonDOM.appendChild(table);


}


  
// adding eventlistener to the report button
reportButtonDOM.addEventListener("click", generateReport);

