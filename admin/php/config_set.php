<?php
$data = $_POST["data"];
file_put_contents("config.txt", $data, LOCK_EX);

echo "Данные обновлены"
?>