<?php /* contact.php */ ?>

<?php include_once($_SERVER['DOCUMENT_ROOT']."/includes/top.php"); ?>


<?php 

		   	 
	if(isset($_POST["firstname"]) && isset($_POST["lastname"]) && isset($_POST["email"]) && isset($_POST["message"]) ){

  		$mailTo = "laura.cabrera@funnelcity.com";
		$subject = "[funnelcity.com] contact form";
		$message = $_POST["message"];
		
		$mailFrom = $_POST["email"];
		$nameFrom = $_POST["firstname"].' '.$_POST["lastname"];

		$header = 'From: "'. $nameFrom . '" <' . $mailFrom . '>' . "\r\n";
		$header .= 'Reply-To: '. $mailTo . "\r\n";
		//$header .= "MIME-Version: 1.0\r\n" ;
        //$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		$header .= "X-Mailer: PHP/" . phpversion();

		
	}


?>
		

<div class="twelve columns">
					<div class="row">
						
						<div class="nine columns">
					
							<?php if(mail($mailTo,$subject,$message,$header)){ ?>
								<h1>Thank you</h1>
								<p>Thank you for contacting us. We will get back to you shortly.</p>
							<?php }else{ ?>
								<h1>Email not sent</h1>
								<p>Your message was not sent. Please try again.</p>
							<?php } ?>
						</div>
						<div class="three columns">
							<h2 class="side-column-spacer">Mailing Address</h2>
							<p>
								
								<strong>funnel city</strong><br/>
								2150 East Hastings St.<br/>
							   Suite PH9<br/>
							   Vancouver, BC, V5L 0A5</br>
							   Canada
							</p>
							<h2>Telephone</h2>
							<p>(778) 996 - 5926</p>
						</div>
					</div>
				</div>	

<?php include_once($_SERVER['DOCUMENT_ROOT']."/includes/bottom.php"); ?>