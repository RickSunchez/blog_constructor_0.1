<?php
include "db_link.php";
$table = strval($_POST['table']);
$id = strval($_POST['id']);

$sql = "UPDATE " . $table . " SET ";

switch ($table) {
	case 'pinned':
	case 'about':
		if (isset($_POST['header'])) {
			$sql .= "header = '".strval($_POST['header'])."', ";
		}
		if (isset($_POST['content'])) {
			$sql .= "content = '".strval($_POST['content'])."', ";
		}
		if (isset($_POST['properties'])) {
			$setActiveField = "UPDATE " . $table . " SET properties = 0";
			mysqli_query($link, $setActiveField);
			$sql .= "properties = '".strval($_POST['properties'])."', ";
		}
		break;
	case 'news':
		if (isset($_POST['header'])) {
			$sql .= "header = '".strval($_POST['header'])."', ";
		}
		if (isset($_POST['content'])) {
			$sql .= "content = '".strval($_POST['content'])."', ";
		}
		if (isset($_POST['likes'])) {
			$sql .= "likes = '".strval($_POST['likes'])."', ";
		}
		if (isset($_POST['reports'])) {
			$sql .= "reports = '".strval($_POST['reports'])."', ";
		}
		if (isset($_POST['shared'])) {
			$sql .= "shared = '".strval($_POST['shared'])."', ";
		}
		if (isset($_POST['author'])) {
			$sql .= "author = '".strval($_POST['author'])."', ";
		}
		if (isset($_POST['properties'])) {
			$sql .= "properties = '".strval($_POST['properties'])."', ";
		}
		break;
}

$sql = substr($sql, 0, -2);
$sql .= " WHERE id='$id'";

if (mysqli_query($link, $sql)) {
	echo "Запись обновлена!";
} else {
	echo 'Ошибка: ' . mysqli_error($link);
}
?>