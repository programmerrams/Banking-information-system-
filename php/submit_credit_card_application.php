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

// Get form data
$first_name = $last_name = $credit_score = $annual_salary = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $data = $_REQUEST['val1'];

    if (empty($data)) {
        echo "data is empty";
    } else {
        echo $data;
    }

    $first_name = trim($_POST['first_name']);
    $last_name = trim($_POST['last_name']);
    $credit_score = intval($_POST['credit_score']);
    $annual_salary = floatval($_POST['annual_salary']);
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

// Prepare and bind
$sql = "INSERT INTO credit_cards (`first_name`, `last_name`, `credit_score`, `annual_salary`) 
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

// Close the connection
$stmt->close();
$conn->close();
?>