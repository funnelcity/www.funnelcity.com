<?php /* contact.php */ ?>

<?php include_once($_SERVER['DOCUMENT_ROOT']."/includes/top.php"); ?>

<div class="twelve columns">
					<div class="row">
						
						<div class="nine columns">
							<h1>Contact us</h1>

							<p>Let us know how can we help you.</p>
							<form id="contact_form" method="post" action="../thankyou/">
  
							  
							  <div class="row">
							    <div class="six columns">
							      <input name="firstname" type="text" placeholder="first name" />
							    </div>
							    <div class="six columns">
							      <input name="lastname" type="text" placeholder="last name" />
							    </div>
							   	<div class="twelve columns">
							      <input name="email" type="text" placeholder="e-mail" />
							      
							    </div>
							  </div>

							  <textarea name="message" placeholder="Message"></textarea>
							  <a class="round button" id="contact_submit">Submit</a>
							</form>

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