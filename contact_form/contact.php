<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $phone = $_POST["phone"];

  // Send the email
  ini_set( 'display_errors', 1 );
  error_reporting( E_ALL );
  $from = "yhteydenottolomake@ansiomaki.fi";
  $to = ["iivari@distio.fi","iivari.heikkila@gmail.com"];
  $subject = "Uusi yhteydenotto verkkosivuiltanne";
  $body = "Nimi: $name\nSähköpostisoite: $email\nPuhelinnumero: $phone\nViesti: $message";
  $headers = "From:" . $from;
  if (mail(implode(",", $to), $subject, $body, $headers)) {
    header("Location: /index.html");  // Redirect to the home page
    exit();
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>