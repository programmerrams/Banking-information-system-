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
$conn = mysqli_connect("localhost", "root", "", "flagbank");

if (isset($_POST['submit'])) {
    // Retrieving form data
    $first_name = $_POST["formFirstName"];
    $last_name = $_POST["formLastName"];
    $credit_score = $_POST["formCreditScore"];
    $annual_salary = $_POST["formAnnualSalary"];
}

$query = "INSERT INTO 'credit_cards' VALUES ('$first_name', '$last_name', '$credit_score', '$annual_salary')";

mysqli_query($conn, $query);

?>
