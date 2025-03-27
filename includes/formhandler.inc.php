<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstName = $_POST['formFirstName'];
  $lastName = $_POST['formLastName'];

  $annualIncome = $_POST['formAnnualIncome'];

  $creditScore = $_POST['formCreditScore'];

  try {
    require_once = "dbh.inc.php";
    $query = "INSERT INTO creditcardapplication (first_name, last_name, income, creditscore) VALUES (:formFirstName, :formLastName, :formAnnualIncome, :formCreditScore)";


    $pdo = null;
    $stmt = null;

    header("location: html\Credit Card Page.html")

    die();
  } catch (PDOException $e) {
    die("Query failed: " , $e->getMessage());
  }
} else {
    header("location: html\Credit Card Page.html")
}