<?php
// Database connection details
$servername = "localhost";
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$dbname = "banking_system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$creditScore = $_POST['creditScore'];
$annualSalary = $_POST['annualSalary'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO credit_card_applications (first_name, last_name, credit_score, annual_salary) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssis", $firstName, $lastName, $creditScore, $annualSalary);

// Execute the statement
if ($stmt->execute()) {
    echo "Application submitted successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>