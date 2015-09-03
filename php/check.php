<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'config.php';
require './Be2bill/Api/Autoloader.php';

Be2bill_Api_Autoloader::registerAutoloader();

// Use fallback URL
// Be2bill_Api_ClientBuilder::switchProductionUrls();

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient('CONVOY', 'I>3Dod7KdP$DJKVT');

if($be2bill->checkHash($_POST) == $_POST['HASH']) {
    // Display the transaction result to the card-holder
    echo "valid";
} else {
    // Suspicious redirection
    echo "suspicious";
}

?>