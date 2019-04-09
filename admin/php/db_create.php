<?php
/*$link = mysqli_connect('localhost', 'root', '');
if (!$link) {
	die('Ошибка соединения: ' . mysqli_error($link));
}

$sql = "CREATE DATABASE blog_db CHARACTER SET utf8 COLLATE utf8_general_ci";*/

/*if (mysqli_query($link, $sql)) {
    echo "База данных успешно создана\n";
    $link = mysqli_connect('localhost', 'root', '', "blog_db");*/
include "db_link.php";

$sql = "CREATE TABLE authors (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		name VARCHAR(18) NOT NULL,
		avatar VARCHAR(100),
		contact VARCHAR(64),
		about VARCHAR(255)
		)";
if (mysqli_query($link, $sql)) {
	echo "Таблица 'authors' успешно добавлена в базу данных\n";
} else {
	echo 'Ошибка при создании таблицы: ' . "\n" . mysqli_error($link);
}

$sql = "CREATE TABLE news (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		header VARCHAR(255) NOT NULL,
		content VARCHAR(4096) NOT NULL,
		create_date VARCHAR(25) NOT NULL,
		likes INT(6),
		reports INT(6),
		shared INT(6),
		author INT REFERENCES authors(author_id),
		properties VARCHAR(255)
		)";
if (mysqli_query($link, $sql)) {
	echo "Таблица 'news' успешно добавлена в базу данных\n";
} else {
	echo 'Ошибка при создании таблицы: ' . "\n" . mysqli_error($link);
}

$sql = "CREATE TABLE pinned (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		header VARCHAR(255) NOT NULL,
		content VARCHAR(4096) NOT NULL,
		properties BOOLEAN NOT NULL
		)";
if (mysqli_query($link, $sql)) {
	echo "Таблица 'pinned' успешно добавлена в базу данных\n";
} else {
	echo 'Ошибка при создании таблицы: ' . "\n" . mysqli_error($link);
}

$sql = "CREATE TABLE about (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
		header VARCHAR(255) NOT NULL,
		content VARCHAR(4096) NOT NULL,
		properties BOOLEAN NOT NULL
		)";
if (mysqli_query($link, $sql)) {
	echo "Таблица 'about' успешно добавлена в базу данных\n";
} else {
	echo 'Ошибка при создании таблицы: ' . "\n" . mysqli_error($link);
}
/*} else {
    echo 'Ошибка при создании базы данных: ' . "\n" . mysqli_error($link);
}*/
?>