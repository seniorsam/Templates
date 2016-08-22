<?php
// print_r($_POST);
// exit;

if(isset($_POST)) {
     
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "senorsameh7@gmail.com";
    $email_subject = "Brilliant website git email";
     
     
    $name =  $_POST['name'];    
    $email = $_POST['email'];
    $message = $_POST['message'];

    $inputs = ['name' => $name,'email' => $email, 'message' => $message];
    $errors = '';
    
    foreach ($inputs as $key => $value) {
      empty($value) ? $errors .= '- '.$key.' is required<br/>' : null;
    }

    if(strlen($errors)){
      echo $errors;
      exit;
    }

    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Email: ".clean_string($email)."\n";
    $email_message .= "Message: ".clean_string($message)."\n";
     
     
// create email headers
$headers = 'From: '.$email."\r\n".
'Reply-To: '.$email."\r\n" .
'X-Mailer: PHP/' . phpversion();

$mail = @mail($email_to, $email_subject, $email_message, $headers);  

$response = $mail ? 'Email sent successfully' : 'Problem occured: please fill all the information and try again';

echo $response;

}


?>