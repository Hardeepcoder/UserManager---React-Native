<?php include 'config.php';


	$json = file_get_contents('php://input');
 
	 // decoding the received JSON and store into $obj variable.
	 $obj = json_decode($json,true);
	 
	 // name store into $name.
	$name = $obj['name'];
	 
	// same with $email.
	$email = $obj['email'];
	 
	// same with $password.
	$password = $obj['password'];
	
	if($obj['email']!="")
	{
	
	$result= $mysqli->query("SELECT * FROM users where email='$email'");
	
	
		if($result->num_rows>0){
			echo json_encode('email already exist');  // alert msg in react native		 		
		}
		else
		{		
		   $add = $mysqli->query("insert into users (name,email,password) values('$name','$email','$password')");
			
			if($add){
				echo  json_encode('User Registered Successfully'); // alert msg in react native
			}
			else{
			   echo json_encode('check internet connection'); // our query fail 		
			}
				
		}
	}
	
	else{
	  echo json_encode('try again');
	}

	
?>

