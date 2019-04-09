<?php
include "config_get.php";
$configJSON = json_decode($config_content, true);

$adress = $configJSON['link'];
$user   = $configJSON['user'];
$passw  = $configJSON['password'];
$datab  = $configJSON['database'];

$link = mysqli_connect($adress, $user, $passw, $datab);
if (!$link) {
	die('Ошибка соединения: ' . mysqli_error($link));
}
?>