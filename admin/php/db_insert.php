<?php
include "db_link.php";
parse_str(file_get_contents("php://input"), $data);
$dataJSON = json_decode($data["data"], true);
$table    = $data["table"];

switch ($table) {
	case 'pinned':
		$setActiveField = "UPDATE " . $table . " SET properties = 0";
		mysqli_query($link, $setActiveField);
		$sql = "INSERT INTO " . $table . " (header, content, properties)
			VALUES ('".$dataJSON["header"]."','".$dataJSON["content"]."', 1)";
		break;
	case 'about':
		$setActiveField = "UPDATE " . $table . " SET properties = 0";
		mysqli_query($link, $setActiveField);
		$sql = "INSERT INTO " . $table . " (header, content, properties)
			VALUES ('".$dataJSON["header"]."','".$dataJSON["content"]."', 9)";
		break;
	case 'news':
		$sql = "INSERT INTO " . $table . " (header, content, create_date, author, properties)
			VALUES ('".$dataJSON["header"]."','".$dataJSON["content"]."', '".date("j F Y")."', 42, 0)";
		break;
	default:
		# code...
		break;
}

if (mysqli_query($link, $sql)) {
	echo "Данные успешно добавлены";
} else {
	echo "Ошибка: \n" . mysqli_error($link);
}
?>