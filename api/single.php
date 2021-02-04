<?php
include_once './config/database.php';
require "./vendor/autoload.php";
use \Firebase\JWT\JWT;
jwt::$leeway = 10;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$secret_key = "345sdf435sdf3453";
$jwt = null;
$databaseService = new DatabaseService();
$conn = $databaseService->getConnection();

$data = json_decode(file_get_contents("php://input"));


//$authHeader = $_SERVER['HTTP_AUTHORIZATION'];

//$arr = explode(" ", $authHeader);


/*echo json_encode(array(
    "message" => "sd" .$arr[1]
));*/

$jwt = $data->access_token;
$id = $data->id;


if($jwt){

    try {

        $decoded = JWT::decode($jwt, $secret_key, array('HS256'));

        
		$sql="SELECT * FROM blog where id='$id'";
		$result=$conn->query($sql);
		if($result->num_rows > 0)
		{
			$postData = array();
				$postData[] = mysqli_fetch_assoc($result);
			 echo json_encode(array(
            "message" => "200","blog" =>$postData
        ));
		}
		else{
			echo json_encode(array("message" => "201"));
		}
		
		
		

       

    }catch (Exception $e){


    echo json_encode(array(
        "message" => "403",
        "error" => $e->getMessage()
    ));
	}
}
	
else
{
	echo json_encode(array(
            "message" => "403"
        ));
}


?>