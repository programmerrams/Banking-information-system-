<?php
// Database connection details for Flag Bank
$servername = "localhost"; // Replace with your database server (e.g., "127.0.0.1" or a remote server address)
$username = "jeremy"; // Replace with your Flag Bank database username
$password = "1234"; // Replace with your Flag Bank database password
$dbname = "FlagBank"; // Replace with the name of the Flag Bank database

// Create connection
$conn = new mysqli("127.0.0.1", $jeremy, "1234", $FlagBank);

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