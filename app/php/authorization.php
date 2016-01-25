<?php

require_once __DIR__.'/vendor/autoload.php';
require_once __DIR__.'/config.php';

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxFormClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);
//$be2bill = Be2bill_Api_ClientBuilder::buildProductionFormClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);

echo $be2bill->buildAuthorizationFormButton(
    $_POST['total'],
    $_POST['order_id'],
    $_POST['user_id'],
    'Elliott Erwitt print payment',
    $htmlOptions = array(
        'SUBMIT' => array('value' => 'Proceed to payment'),
        'FORM' => array('id' => 'paymentForm')
    ),
	$options = array(
        'LANGUAGE' => 'en',
	// 	'3DSECURE'         => 'yes',
	// 	'CARDFULLNAME'     => $_POST['firstname'].' '.$_POST['lastname'],
	// 	'CLIENTEMAIL'      => 'john.doe@email.com',
	// 	'HIDECARDFULLNAME' => 'yes',
	// 	'HIDECLIENTEMAIL'  => 'yes'
	)
);
