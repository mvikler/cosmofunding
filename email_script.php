<?php

  $organisation = $_POST['organizationName'];
  $first_name = $_POST['name'];
  $last_name = $_POST['lastname'];
  $street = $_POST['street'];
  $zip = $_POST['plz'];
  $kanton = $_POST['kanton'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $website = $_POST['website'];
  $subject = $_POST['subject'];

  $email_from = "todor.konjevic@gmail.com";
  $email_to = "todor.konjevic@gmail.com";
  $email_subject = "New registration";

  $message = "Subject: ".$subject."\n";
  $message .= "Organisation: ".$organisation."\n";
  $message .= "First name: ".$first_name."\n";
  $message .= "Last name: ".$last_name."\n";
  $message .= "Address: ".$street."\n";
  $message .= "Zip code: ".$zip."\n";
  $message .= "Kanton: ".$kanton."\n";
  $message .= "E-mail: ".$email."\n";
  $message .= "Phone: ".$phone."\n";
  $message .= "Website: ".$website."\n";

  // Add code for mailing via smtp


 ?>