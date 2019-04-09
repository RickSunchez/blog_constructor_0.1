<?php
//$dir = $_SERVER['DOCUMENT_ROOT']."/public_html/user_images";
$dir = str_replace("admin\pages", "", dirname(__DIR__))."/user_images";

$files = scandir($dir);

$data = array("images" => []);
for ($i=0; $i<count($files);$i++) {
	if ($files[$i] == "." || $files[$i] == "..") continue;
	array_push($data["images"], array(
		"name" => $files[$i]
		));
}

echo json_encode($data);
?>