<?php 	
include ('config.php');
$data = file_get_contents("php://input");
$data = json_decode($data,true);
$usrname = $data['usrname'];
$password = $data['password'];

if ($usrname && $password)
{

	$query = mysqli_query($con,"SELECT * FROM `gausala` WHERE admin_username LIKE '$usrname'");
	$numrows = mysqli_num_rows($query);
	if($numrows != 0)
	{
		while ($row = mysqli_fetch_row($query))
		{
			if($row[8] == $usrname)
			{

				if($row[9] == $password)
				{
					echo "true";
				}
				else{
					echo "passwod is wrong";
				}
			}
			else{
				echo "username is wrong";
			}

		}
	}

	else{
		echo "user does not exist!";
	}
}
?>