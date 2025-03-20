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

$sql = "INSERT INTO `c"

// Get form data
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$creditScore = $_POST['creditScore'];
$annualSalary = $_POST['annualSalary'];

Welcome <?php echo $_POST['firstName']; ?> 
<?php echo $_POST['lastName']; ?>!<br>
Your credit score is: <?php echo $_POST['creditScore']; ?><br>
Your annual salary is: <?php echo $_POST['annualSalary']; ?><br>

// Prepare and bind
$sql = "INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) 
        VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
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