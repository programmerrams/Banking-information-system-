<?php
// filepath: c:\xampp\htdocs\Banking-information-system--main\Banking-information-system--main\Banking-information-system-\php\submit_credit_card_application_temp.php

//Database connection
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
    $query = "INSERT INTO creditcards (first_name, last_name, credit_score, annual_salary) VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $query);

    if ($stmt) {
        // Bind parameters to the prepared statement
        mysqli_stmt_bind_param($stmt, "ssii", $firstName, $lastName, $creditScore, $annualSalary);

        // Execute the query and check for success
        if (mysqli_stmt_execute($stmt)) {
            echo "<script>alert('Application submitted successfully!');</script>";
            // echo "<scipt> window.location.href = 'creditResults.html';</script>";
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