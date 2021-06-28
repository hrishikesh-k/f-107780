<?
	require"phpmailer/class.phpmailer.php";
	
	$_POST = json_decode(file_get_contents('php://input'), true);
	$name = $_POST["naam"];
	$email = $_POST["email"];
	$phone = $_POST["telefoon"];
	$message = $_POST["bericht"];
	$success = false;

	if(!empty($name) && !empty($email)) {
		$mail = new PHPMailer();
		//$mail->IsSMTP();
		$mail->IsHTML(true);
		$mail->CharSet = 'UTF-8';
		$mail->From = "info@bennisuitvaart.nl";
		$mail->FromName = "Bennis Uitvaart";
		$mail->AddAddress("info@bennisuitvaart.nl");
		//$mail->AddAddress("info@designchap.nl");
		$mail->Subject 	= "Het contactformulier op de website is ingevuld met de volgende gegevens:";
		$mail->Body 	= "<p>"
						."Naam: ".$name."<br>"
						."Email: ".$email."<br>"
						."Telefoonnummer: ".$phone."<br>"
						."Bericht: ".$message."</p>";
		if($mail->Send())
		{
			$success = true;
		}else{
			$success = false;
		}
		
		$mail = new PHPMailer();
		//$mail->IsSMTP();
		$mail->IsHTML(true);
		$mail->CharSet = 'UTF-8';
		$mail->ClearAllRecipients();
		$mail->From = "info@bennisuitvaart.nl";
		$mail->FromName = "Bennis Uitvaart";
		$mail->AddAddress( $email );
		$mail->Subject 	= "Bevestiging contact Bennis Uitvaart";

		$email_template = "";
		$email_template .= file_get_contents('email-template/email-top.html');
		$email_template .= "Geachte ".$name.",<br><br>"
						."Bedankt voor uw bericht. Wij hebben de volgende gegevens mogen ontvangen:<br><br>"
						."Uw naam: ".$name."<br>"
						."E-mailadres: ".$email."<br>"
						."Telefoonnummer: ".$phone."<br>"
						."Uw bericht: ".$message."<br><br>"
						."Wij nemen zo spoedig mogelijk contact met u op.<br><br>"
						."Vriendelijke groet,<br><br>"
						."Bennis Uitvaart";
		$email_template .= file_get_contents('email-template/email-bottom.html');

		$mail->Body = $email_template;

		if($mail->Send())
		{
			if($success === true){
				echo json_encode(array("success"=>true));
			}else{
				echo json_encode(array("success"=>false));
			}
		}else{

			echo json_encode(array("success"=>false));
		}
	}else{
		echo "Fields are empty";
	}
?>