<?php
include('./myconnect.php');
$username = $_POST['username'];
$password = $_POST['password']; 
$consulta = "SELECT * FROM userdata WHERE user = '$username' AND password ='$password'"; 
$resultado = $conexion->query($consulta);
if($resultado->num_rows > 0){
    echo "success";
}
else{
    echo"error";
}
$conexion->close();
?>
