<?php
include("database_connection.php");

if(isset($_POST['submit'])) {
  // Correcting variable names to match form input names
  $first_name = trim($_POST['formFirstName']);
  $last_name = trim($_POST['formLastName']);
  $credit_score = trim($_POST['formCreditScore']);
  $annual_salary = trim($_POST['formAnnualSalary']);

  // Input validation
  if(empty($first_name) || empty($last_name) || empty($credit_score) || empty($annual_salary)) {
      echo "<script>alert('All fields are required.')</script>";
  } else {
      // Using prepared statements to prevent SQL injection
      $stmt = $conn->prepare("INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) VALUES (?, ?, ?, ?)");
      $stmt->bind_param("ssii", $first_name, $last_name, $credit_score, $annual_salary);

      if($stmt->execute()) {
          echo "<script>alert('Data inserted successfully')</script>";
      } else {
          echo "<script>alert('There was an error: " . $stmt->error . "')</script>";
      }
      $stmt->close();
  }
}

// Fetching data from the credit_cards table to display submitted data
$sql = "SELECT * FROM credit_cards;";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

if ($resultCheck > 0) {
  echo "<h2>Submitted Data:</h2>";
  echo "<table border='1'>
          <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Credit Score</th>
              <th>Annual Salary</th>
          </tr>";
  while ($row = mysqli_fetch_assoc($result)) {
      echo "<tr>
              <td>" . htmlspecialchars($row['first_name']) . "</td>
              <td>" . htmlspecialchars($row['last_name']) . "</td>
              <td>" . htmlspecialchars($row['credit_score']) . "</td>
              <td>" . htmlspecialchars($row['annual_salary']) . "</td>
            </tr>";
  }
  echo "</table>";
}