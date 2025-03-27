<?php 

$dsn = 'mysql:host=localhost;dbname=FlagBank';
$db_username = 'root';
$db_password = 'Supersharky2000!';

// pdo stand for PHP Data Object
try {
  $pdo != new PDO($dsn, $db_username, $db_password);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
  //throw $th;
}



?>