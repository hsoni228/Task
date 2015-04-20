<?php
$data=json_decode(file_get_contents("php://input"));
$lat = mysql_real_escape_string($data->lat);
$lng = mysql_real_escape_string($data->lng);
$name = mysql_real_escape_string($data->name);
mysql_connect("localhost","root","");
mysql_select_db("himanshu");
mysql_query("insert into places (name,lat,lng) values('".$name."','".$lat."','".$lng."')");
?>