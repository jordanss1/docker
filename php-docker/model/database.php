<?php
 
    $dotenv = Dotenv\Dotenv::createImmutable(dirname(__DIR__));
    $dotenv->safeLoad();

    $dsn = "mysql:host={$_ENV['DB_HOST']};dbname=assignment_tracker";
    $username = $_ENV['DB_USERNAME'];
    $password = $_ENV['DB_PASS'];

    try {
        $db = new PDO($dsn, $username, $password);

    } catch (PDOException $err) {
        $error = "DB Error: $e->getMessage()";
        include('view/error.php');
        exit();
    }

?>