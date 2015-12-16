<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require 'config.php';
require './Be2bill/Api/Autoloader.php';

Be2bill_Api_Autoloader::registerAutoloader();

// Use fallback URL
// Be2bill_Api_ClientBuilder::switchProductionUrls();

// $be2bill = Be2bill_Api_ClientBuilder::buildSandboxFormClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);

// echo $be2bill->buildAuthorizationFormButton(
//     $_POST['total'],
//     $_POST['order_id'],
//     $_POST['user_id'],
//     'Elliott Erwitt print payment',
//     $htmlOptions = array(
//         'SUBMIT' => array('value' => 'Proceed to payment'),
//         'FORM' => array('id' => 'paymentForm')
//     )
// 	// $options = array(
// 	// 	'3DSECURE'         => 'yes',
// 	// 	'CARDFULLNAME'     => $_POST['firstname'].' '.$_POST['lastname'],
// 	// 	'CLIENTEMAIL'      => 'john.doe@email.com',
// 	// 	'HIDECARDFULLNAME' => 'yes',
// 	// 	'HIDECLIENTEMAIL'  => 'yes'
// 	// )
// );

$be2bill = Be2bill_Api_ClientBuilder::buildSandboxDirectlinkClient(BE2BILL_IDENTIFIER, BE2BILL_PASSWORD);
// Replace buildSandboxDirectlinkClient by buildProductionDirectlinkClient and use your dedicated credentials to go live

$user_ip = getUserIP();

$result = $be2bill->redirectForPayment(
    $_POST['total'],
    $_POST['order_id'],
    $_POST['user_id'],
    $_POST['user_id'],
    $user_ip,
    'Elliott Erwitt print payment by PayPal',
    $_SERVER['HTTP_USER_AGENT'],
    []
);

echo "CLIENT_IP :"; 
echo $user_ip;
echo " --- USER_AGENT :"; 
echo $_SERVER['HTTP_USER_AGENT'];
echo " --- RESULT :"; 
var_dump($result);

function getUserIP() {
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP)) {
        $ip = $client;
    } elseif(filter_var($forward, FILTER_VALIDATE_IP)) {
        $ip = $forward;
    } else {
        $ip = $remote;
    }

    return $ip;
}

?>