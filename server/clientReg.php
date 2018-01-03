<?php
	include ('config.php');
	$data = file_get_contents("php://input");
	$data = json_decode($data,true);
	
	$usrname = $data['username'];
	$email = $data['email'];
	$password = $data['password'];
	$contact = $data['contact'];
	print_r($data);
	$submit = mysqli_query($con,"INSERT INTO `site_users`(`user_name`, `user_email`, `user_pwd`, `usr_contact`) VALUES ('".$usrname."','".$email."','".$password."','".$contact."')")or die(mysqli_error($con));
		var_dump($submit);
	?>