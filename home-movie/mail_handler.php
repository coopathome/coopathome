<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$first_name = $_POST['entry-first-name'];
$last_name = $_POST['entry-last-name'];
$user_email = $_POST['entry-email'];
$telephone = $_POST['entry-phone'];
$coop_number = $_POST['entry-coop-number'];
$message = $_POST['textarea'];

$ticket_amount = $_POST['tickets_number'];
$non_profit = $_POST['nonprofit_check'];
$postal_code = $_POST['postal_code'];
$mailing_address = $_POST['mailing_address'];

//Validate first
if(empty($first_name)||empty($last_name)||empty($user_email)||empty($message))
{
//    echo "Name and email are mandatory!";
     echo "Name, email and message are mandatory. Make sure you have those are filled in.";
    exit;
}

if(IsInjected($user_email))
{
    echo "Incorrect email value!";
    exit;
}

//$email_from = 'chamber@winkleronline.com';
$email_from = 'coopathomeweb@gmail.com';
$email_subject = "Home Contest Entry";
$email_body = "You have received a new Home Contest entry from $first_name $last_name .\n\n".
    "First Name:\n $first_name\n\n".
    "Last Name:\n $last_name\n\n".
    "Co-op Number:\n $coop_number\n\n".
    "Phone Number:\n $telephone\n\n".
    "Email Address:\n $user_email\n\n".
    "Message:\n $message\n\n".
//    "Company:\n $company\n\n".
//    "Mailing Address:\n $mailing_address\n\n".
//    "Postal Code:\n $postal_code\n\n".
//    "Telephone Number:\n $telephone\n\n".
//    "E-mail Address:\n $user_email\n\n".
//    "Number of Tickets:\n $ticket_amount\n\n".
//    "Non Profit?:\n $non_profit\n\n".
    
$to = "aruttan@winklercoop.com";
$headers = "From: $user_email \r\n";
$headers .= "Reply-To: $user_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thanks.html');
//echo "Thanks. We'll let you know if you win.";


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?>