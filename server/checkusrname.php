<?php
include ('config.php');
$username = $_GET['username'];
$ara = array();
$query = mysqli_query($con,"SELECT * FROM `gausala` WHERE `admin_username` LIKE '$username'");
if(mysqli_num_rows($query)>0){
  echo 'true';
}
else{
  echo 'false';
}

?>