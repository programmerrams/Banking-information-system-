<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Apply for a credit card with Flag Bank. Provide your details to get started." />
  <title>Apply for a Credit Card</title>
  <link rel="stylesheet" href="../css/Navigation.css" />
  <link rel="stylesheet" href="../css/Credit.css" />
</head>

<body>
  <!-- Navigation Bar -->
  <nav class="nav-menu">
    <ul class="nav-list">
      <li><a href="Index.html">Home</a></li>
      <li><a href="Request Loans.html">Request Loans</a></li>
      <li>
        <a href="Credit Card Page copy.php" class="active">Apply for a Credit Card</a>
      </li>
      <li><a href="Accounts.html">Manage Accounts</a></li>
      <li class="login"><a href="Log In Page.html">Login</a></li>
      <li><a href="Registration Page.html">Register</a></li>
    </ul>
  </nav>

  <!-- Main Content -->
  <main>
    <p>
      Fill out the form below to apply for a credit card. Please ensure all
      information is accurate.
    </p>
    <br />
    <form action="" method="post">
      <!-- Name Section -->
      <div class="form-section name">
        <h2>Personal Information</h2>
        <label for="formfirstName">First Name</label>
        <input type="text" id="firstName" name="formFirstName" class="firstName" placeholder="John" value="" required
          pattern="[a-zA-Z]*" />

        <label for="formlastName">Last Name</label>
        <input type="text" id="lastName" name="formLastName" class="lastName" value="" placeholder="Doe" required
          pattern="[a-zA-Z]*" />
      </div>

      <!-- Credit Score Section -->
      <div class="form-section credit-score-box">
        <h2>Credit Score</h2>
        <label for="formcreditScore">Score</label>
        <input type="number" id="creditScore" name="formCreditScore" class="credit-score" placeholder="300" min="300"
          value="" max="850" required />
        <p>Range: 300 - 850</p>
      </div>

      <!-- Salary Section -->
      <div class="form-section salary">
        <h2>Annual Salary</h2>
        <label for="formannualSalary">Net Income</label>
        <input type="number" id="annualSalary" name="formAnnualSalary" placeholder="$30000" class="salary-amount"
          value="" min="0" required />
      </div>

      <!-- Submit Button -->
      <div class="form-section submit">
        <button type="submit" name="submit" class="submit-btn">Submit Application</button>
      </div>
    </form>
  </main>

  <!-- Footer -->
  <footer>
    <ul class="second-nav-list">
      <li><a href="About Us.html">About Us</a></li>
      <li><a href="Questions and Answers.html">Questions & Answers</a></li>
      <li><a href="Mission Statement.html">Mission Statement</a></li>
      <li><a href="Disclaimers.html">Disclaimers</a></li>
      <li><a href="ratesAndFees.html">Rates & Fees</a></li>
    </ul>
  </footer>

  <script src="../js/Credit.js"></script>
</body>

</html>

<?php
// filepath: c:\xampp\htdocs\Banking-information-system--main\Banking-information-system--main\Banking-information-system-\php\submit_credit_card_application_temp.php

// Database connection
$conn = mysqli_connect("localhost", "root", "", "flagbank2");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Check if the form is submitted
if (isset($_POST['submit'])) {
    // Retrieve form data
    $firstName = $_POST['formFirstName'];
    $lastName = $_POST['formLastName'];
    $creditScore = $_POST['formCreditScore'];
    $annualSalary = $_POST['formAnnualSalary'];

    // Use prepared statements to prevent SQL injection
    $query = "INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $query);

    if ($stmt) {
        // Bind parameters to the prepared statement
        mysqli_stmt_bind_param($stmt, "ssii", $firstName, $lastName, $creditScore, $annualSalary);

        // Execute the query and check for success
        if (mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Application submitted successfully!');</script>";
        } else {
            echo "<script>alert('Error: " . mysqli_stmt_error($stmt) . "');</script>";
        }

        // Close the statement
        mysqli_stmt_close($stmt);
    } else {
        echo "<script>alert('Error preparing the statement: " . mysqli_error($conn) . "');</script>";
    }
}

// Close the database connection
mysqli_close($conn);
?>