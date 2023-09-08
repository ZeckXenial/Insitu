<?php
$conexion = new mysqli("localhost" , "root", "", "insitu-database");
if ($conexion->connect_error) {
    die('Error de conexión: ' . $conexion->connect_error);
}
?>