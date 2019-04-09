<?php
include "db_link.php";
$table = strval($_POST['table']);
$id    = strval($_POST['id']);

$sql = "DELETE FROM " . $table . " WHERE id='$id'";

if (mysqli_query($link, $sql)) {
	echo "Запись удалена!";
} else {
	echo 'Ошибка: ' . mysqli_error($link);
}

$prop_isZero = mysqli_num_rows(mysqli_query($link, "SELECT properties FROM ".$table." WHERE properties!=0"));

if ($table != "news" && !$prop_isZero) {
	$setActiveField = "UPDATE " . $table . " SET properties = 1 ORDER BY id DESC LIMIT 1";
	mysqli_query($link, $setActiveField);
	echo "\nОбновлено";
}
?>