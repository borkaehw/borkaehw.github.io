<?php
    // send email to me
    if (array_key_exists("email", $_POST) && array_key_exists("subject", $_POST) && array_key_exists("body", $_POST)) {
        
        $emailTo = "borkaehw@umich.edu";

        $subject = $_POST["subject"];

        $body = $_POST["body"];

        $headers = "From: ".$_POST["email"];

        if (mail($emailTo, $subject, $body, $headers)) {

            // echo "email has been sent successfullly";

        } else {

            // echo "email cannot be sent";

        }
        
        header("Refresh:0");
    }
?>