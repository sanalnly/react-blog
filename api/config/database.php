<?php
class DatabaseService{

    private $db_host = "localhost:3306";
    private $db_name = "convergytics";
    private $db_user = "root";
    private $db_password = "";
    private $connection;

    public function getConnection(){

        $this->connection = null;

		
        $this->connection = mysqli_connect($this->db_host, $this->db_user, $this->db_password,$this->db_name);
        if (!$this->connection) {
		  die("Connection failed: " . mysqli_connect_error());
		}

        return $this->connection;
    }
}

?>