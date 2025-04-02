<?php
include("database_connection.php");

if (isset($_POST['submit'])) {
    // Retrieving form data
    $first_name = $_POST['formFirstName'];
    $last_name = $_POST['formLastName'];
    $credit_score = $_POST['formCreditScore'];
    $annual_salary = $_POST['formAnnualSalary'];

    // Using prepared statements to prevent SQL injection
    $query = "INSERT INTO credit_cards (first_name, last_name, credit_score, annual_salary) 
              VALUES (?, ?, ?, ?)";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "ssis", $first_name, $last_name, $credit_score, $annual_salary);

    if (mysqli_stmt_execute($stmt)) {
        echo "<script>alert('Data inserted successfully')</script>";
    } else {
        echo "<script>alert('There was an error: " . mysqli_error($conn) . "')</script>";
    }

    mysqli_stmt_close($stmt);
}

// Fetching data from the credit_cards table to display submitted data
$sql = "SELECT * FROM credit_cards";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
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
} else {
    echo "<h2>No data found</h2>";
}

mysqli_close($conn);
?>