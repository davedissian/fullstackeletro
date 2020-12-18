<?php
$servername = "192.168.1.106";
$username = "diego";
$password = "#Recoleta$123a";
$database = "fseletro";

$conn = mysqli_connect($servername, $username, $password, $database);
if (!$conn) {
    die("A conexão deu ruim! " . mysqli_connect_error());
}
?>