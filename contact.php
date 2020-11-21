<?php
    if($_POST["message"]) {
    mail("ediemetzger@gmail.com", "Here is the subject line",
    $_POST["insert your message here"]. "From: an@email.address");
    }
?>

<html>
  <head>
		<meta name="viewport" content ="width=device-width,initial-scale=1,user-scalable=yes" />
		<title>Home</title>
	     	<link rel="stylesheet" href="edenrosemetz.css"/>
		<link href='https://fonts.googleapis.com/css?family=Beth Ellen' rel='stylesheet'>
		<style>
			body {
				font-family: 'Beth Ellen';font-size: 22px;
			}

		</style>
        </head>
        <body style = "background-color:black;">
		<h1>Eden Rose Metzger</h1>
		<nav>
			<ul>
				<li><a href="index.html">Home</a></li>
				<li><a href="#portfolio">Portfolio</a></li>
				<li><a class="active" href="#contact">Contact</a></li>
			</ul>
		</nav>
		<p>
			Send me a message!
		</p>			
		<form action="mailto:ediemetzger@gmail.com" method="post" action="contact.php" enctype="text/plain">
			Name:<br>
			<input type="text" style="height:20px;width:420px">
			<br><br>
			E-mail:<br>
			<input type="text" style="height:20px;width:420px">
			<br><br>
			Message:<br>
			<input type="text" style="height:200px;width:420px"> 
			<br><br>
			<input type="submit" value="Send">
			<input type="reset" value="Reset">
		</form>	
        </body>
</html>
