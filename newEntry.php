<?php
	//script creates new entry in events table
	ini_set("session.cookie_httponly", 1);
	header("Content-Type: application/json"); // Since we are sending a JSON response here (not an HTML document), set the MIME Type to application/json
	require 'tweetDatabase.php';
	$mysqli = new mysqli("localhost", "root", "knickiBaby", "twitterBot_db");

	if($mysqli->connect_errno) {
		printf("Connection Failed: %s\n", $mysqli->connect_error);
		exit;
	}	
	session_start();
	$imageURL = $_SESSION['imageURL'];
	$tweetURL = $_POST['url'];
	$day = $_POST['day'];
	$time = $_POST['time'];
	$stmt = $mysqli->prepare("insert into tweets (imageURL, tweetURL, day, time) values (?, ?, ?, ?)");
	if(!$stmt){
		printf("Query Prep Failed: %s\n", $mysqli->error);
		echo json_encode(array(
			"success" => false,
		));
		exit;
	}
	else{
		$stmt->bind_param('ssis', $imageURL, $tweetURL, $day, $time);
		$stmt->execute();
		$stmt->close();
		exit;
	}
?>