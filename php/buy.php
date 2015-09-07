<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'config.php';
require './Be2bill/Api/Autoloader.php';

Be2bill_Api_Autoloader::registerAutoloader();

// Use fallback URL
// Be2bill_Api_ClientBuilder::switchProductionUrls();

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxFormClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);

echo $be2bill->buildPaymentFormButton(
    $_POST['total'],
    'order_'.time(),
    'user_123456',
    'Payment sample',
    $htmlOptions = array(
        'SUBMIT' => array("value" => "Proceed to payment"),
        'FORM' => array('id' => 'paymentForm')
    )
	// $options = array(
	// 	'3DSECURE'         => 'yes',
	// 	'CARDFULLNAME'     => $_POST['firstname'].' '.$_POST['lastname'],
	// 	'CLIENTEMAIL'      => 'john.doe@email.com',
	// 	'HIDECARDFULLNAME' => 'yes',
	// 	'HIDECLIENTEMAIL'  => 'yes'
	// )
);

?>