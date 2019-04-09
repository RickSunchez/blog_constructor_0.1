<?php
include "db_link.php";

$sql = "SHOW TABLES FROM ".$datab;
$result = mysqli_query($link, $sql);

if ($result) { 
	while ($row = mysqli_fetch_array($result)) {
		$sql = "DROP TABLE ".$row["Tables_in_".$datab];
		if (mysqli_query($link, $sql)) {
			echo "Таблица '".$row["Tables_in_".$datab]."' успешно удалена\n";
		} else {
			echo 'Ошибка при удалении данных: ' . "\n" . mysqli_error($link);
		}
	}
} else {
    echo 'Ошибка при удалении данных: ' . "\n" . mysqli_error($link);
}
?>