<?php

$con=mysqli_connect("localhost","root","","himanshu");
if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$result = mysqli_query($con,"SELECT * FROM places");

$outp = "";
while($row = $result->fetch_array(MYSQLI_ASSOC)) {
	if ($outp != "") {$outp .= ",";}
    $outp .= '{"Name":"'  . $row["name"] . '",';
    $outp .= '"Srno":"'   . $row["sr_no"] . '",';
    $outp .= '"Lat":"'   . $row["lat"] . '",';
    $outp .= '"Lng":"'   . $row["lng"] . '"}';
}
$outp ='{"records":['.$outp.']}';

$con->close();
echo($outp);
?>