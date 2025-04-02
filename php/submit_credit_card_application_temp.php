<?php
// include("database_connection.php");

// recording variables from the form
$first_name = $_POST["formFirstName"];
$last_name = $_POST["formLastName"];
$credit_score = $_POST["formCreditScore"];
$annual_salary = $_POST["formAnnualSalary"];    

// establishing a connection to the database
$host = "localhost";
$user = "root";
$password = "";
$dbname = "flagbank";

// Create connection
$conn = mysqli_connect($host, $user, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

$sql = "INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) 
VALUES (?, ?, ?, ?);";

if (!($stmt = mysqli_prepare($conn, $sql))) {
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ssii", $first_name, $last_name, $credit_score, $annual_salary);

if (mysqli_stmt_execute($stmt)); {
    echo "New record created successfully";
    echo $last_name;
    echo $first_name;
    echo $credit_score;
    echo $annual_salary;
}
    