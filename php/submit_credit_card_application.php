<?php
// Database connection details for Flag Bank
$servername = "localhost"; // Replace with your database server (e.g., "127.0.0.1" or a remote server address)
$username = "root"; // Replace with your MySQL username
$password = ""; // Replace with your MySQL password
$dbname = "FlagBank"; // Replace with the name of the Flag Bank database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize inputs
    $first_name = test_input($_POST['firstName']);
    $last_name = test_input($_POST['lastName']);
    $credit_score = intval($_POST['creditScore']);
    $annual_salary = floatval($_POST['annualSalary']);

    // Prepare and bind the SQL statement
    $sql = "INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) 
            VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);

    if (!$stmt) {
        die("Preparation failed: " . $conn->error);
    }

    $stmt->bind_param("ssis", $first_name, $last_name, $credit_score, $annual_salary);

    // Execute the statement
    if ($stmt->execute()) {
        echo "Application submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close the statement
    $stmt->close();
} else {
    echo "Invalid request method.";
}

// Close the connection
$conn->close();

// Function to sanitize input
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>