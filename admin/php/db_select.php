<?php
include "db_link.php";

$table = $_POST["table"];

$sql = "SELECT * FROM " . $table;

if (isset($_POST['id'])) {
	$sql .= " WHERE id=" . strval($_POST['id']);
} 
if (isset($_POST['properties'])) {
	$sql .= " WHERE properties!=" . strval($_POST['properties']);
}

$query = mysqli_query($link, $sql);

$result = array("rows" => []);

switch ($table) {
	case 'pinned':
	case 'about':
		while ($row=mysqli_fetch_array($query)) {
			array_push($result["rows"], array(
				"id"        => $row["id"],
				"header"    => $row["header"],
				"content"   => $row["content"],
				"visible"   => $row["properties"]
				));
		}
		break;
	case 'news':
		while ($row=mysqli_fetch_array($query)) {
			array_push($result["rows"], array(
				"id"        => $row["id"],
				"header"    => $row["header"],
				"content"   => $row["content"],
				"date"      => $row["create_date"],
				"likes"     => $row["likes"],
				"reps"      => $row["reports"],
				"shared"    => $row["shared"],
				"author"    => $row["author"],
				"prop"      => $row["properties"]
				));
		}
		break;
	default:
		# code...
		break;
}
echo json_encode($result);
?>