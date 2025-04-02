<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "flagbank";
    $conn = null;

    try {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name);
    }
    catch (mysqli_sql_exception $e){
        echo "Could not connect! Error: " . $e->getMessage();
    }
    if ($conn){
        echo "<p>You are connected.</p>";
  }
?>