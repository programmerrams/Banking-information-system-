<?php
include("database_connection.php");

if(isset($_POST['submit'])) {
    // Correcting variable names to match form input names
    $first_name = $_POST['formFirstName'];
    $last_name = $_POST['formLastName'];
    $credit_score = $_POST['formCreditScore'];
    $annual_salary = $_POST['formAnnualSalary'];

    // Fixing the SQL query syntax
    $query = "INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) 
              VALUES ('$first_name', '$last_name', '$credit_score', '$annual_salary')";

    $result = mysqli_query($conn, $query);

    if($result) {
        echo "<script>alert('Data inserted successfully')</script>";
    } else {
        echo "<script>alert('There was an error: " . mysqli_error($conn) . "')</script>";
    }
}

// Fetching data from the flagbank table to display submitted data
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
?>