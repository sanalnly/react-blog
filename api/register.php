<?php
include_once './config/database.php';

header("Access-Control-Allow-Origin: * ");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: *");

$firstName = '';
$lastName = '';
$email = '';
$password = '';
$conn = null;

$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"));

$firstName = $data->first_name;
$lastName = $data->last_name;
$email = $data->email;
$password = $data->password;

$sql="SELECT email FROM users WHERE email='$email'";
$result=$conn->query($sql);
if($result->num_rows > 0)
{
	http_response_code(201);
	echo json_encode(array("message" => "408"));
}
else
{
	$sql="INSERT INTO users(first_name,last_name,email,password) VALUES('$firstName','$lastName','$email','$password')";
	if($conn->query($sql))
	{
		http_response_code(200);
		echo json_encode(array("message" => "200"));
	}
	else{
		http_response_code(202);
		echo json_encode(array("message" => "404"));
	}
}
?>