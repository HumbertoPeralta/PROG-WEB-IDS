<?php

function getPDO(): PDO {
    static $pdo = null;

    if ($pdo === null) {
        $config = require __DIR__ . '/config.php';
        $db = $config['db'];
        
        try {
            $pdo = new PDO('mysql:host=127.0.0.2;port=3307;dbname=productos;charset=utf8', 'root', 'HPM22');            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Error de conexión a la base de datos: " . $e->getMessage());
        }
    }

    return $pdo;
}