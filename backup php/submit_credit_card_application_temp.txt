<?php

$conn = mysqli_connect("localhost", "root", "", "test");
if (isset($_POST['submit'])) {
    // Retrieving form data
    $name = $_POST['name'];
    $age = $_POST['age'];

    // Using prepared statements to prevent SQL injection
    $query = "INSERT INTO test1 (name, age) VALUES (?, ?)";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, "si", $name, $age);

    if (mysqli_stmt_execute($stmt)) {
        echo "<script>alert('Data inserted successfully')</script>";
    } else {
        echo "<script>alert('There was an error: " . mysqli_error($conn) . "')</script>";
    }

    mysqli_stmt_close($stmt);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Insert Data</title>
</head>
    <body>
        <form action="" method="post">
            <label for="">Name</label>
            <input type="text" name="name" required value="">
            <label for="">Age</label>
            <input type="text" name="age" required value="">
            <button type="submit" name="submit">Submit</button>
        </form>
    </body>
</html>
