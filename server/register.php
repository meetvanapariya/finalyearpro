<?php
	include ('config.php');
	$data = file_get_contents("php://input");
	$data = json_decode($data,true);
	$name = $data['gname'];
	$address = $data['gaddress'];
	$contact = $data['contact'];
	$g_id = "null";
	$g_city = $data['city'];
	$g_state = $data['state'];
	$tru_mo = $data['mo'];
	$bytes = openssl_random_pseudo_bytes(4);
	$pwd = bin2hex($bytes);
	$uid = $data['usrname'];
	
	print_r($data);
	$quey = mysqli_query($con,"INSERT INTO `gausala`( `gausala_name`, `gausala_address`, `gausala_contect`, `gausala_identity`, `gausala_city`, `trustee_contact`, `gausala_state`, `admin_username`, `admin_password`) VALUES ('".$name."','".$address."','".$contact."','".$g_id."','".$g_city."','".$tru_mo."','".$g_state."','".$uid."','".$pwd."')")or die(mysqli_error($con));
	var_dump($quey);
?>