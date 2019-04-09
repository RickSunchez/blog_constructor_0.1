<?php
$config_content = file_get_contents("config.txt");
if (isset($_POST["config"])) echo $config_content;
?>